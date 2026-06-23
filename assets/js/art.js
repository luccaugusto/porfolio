(() => {
  // PocketBase origin for the `art` collection. Change here if the subdomain moves.
  const PB = "https://pics.luccaaugusto.xyz";
  const PER_PAGE = 200; // every category (and the homepage set) fits in one page

  // No per-file metadata on the record, so infer video from the file extension.
  const VIDEO_EXTENSIONS = ["mp4", "m4v", "mov", "webm", "ogv", "ogg", "avi", "mkv", "3gp"];

  function isVideo(filename) {
    return VIDEO_EXTENSIONS.includes(filename.split(".").pop().toLowerCase());
  }

  // Build the file endpoint for a record, with an optional on-the-fly thumbnail.
  function fileUrl(record, thumb) {
    if (!record.file) return null;
    let url = `${PB}/api/files/${record.collectionId}/${record.id}/${record.file}`;
    if (thumb) url += `?thumb=${encodeURIComponent(thumb)}`;
    return url;
  }

  // Reproduce the markup galery.html used to emit server-side.
  function renderItem(record) {
    const item = document.createElement("div");
    item.className = "item";

    if (isVideo(record.file)) {
      const video = document.createElement("video");
      video.className = "imagem";
      video.controls = true;
      video.preload = "auto";
      const source = document.createElement("source");
      source.src = fileUrl(record);
      source.type = "video/mp4";
      video.appendChild(source);
      item.appendChild(video);
    } else {
      const a = document.createElement("a");
      a.href = fileUrl(record); // full-res when opened
      a.target = "blank";
      const img = document.createElement("img");
      img.className = "imagem";
      img.loading = "lazy";
      img.src = fileUrl(record, "600x0"); // light thumbnail in the grid
      img.alt = record.description || "";
      a.appendChild(img);
      item.appendChild(a);
    }
    return item;
  }

  // Escape a tag for safe inclusion in the PocketBase filter string literal.
  function escapeFilter(s) {
    return s.replace(/[\\']/g, "\\$&");
  }

  // Fill a masonry container with the records carrying its data-tag. Order is the
  // upload order (`created`), which matches the curated _data/*.yml order.
  async function loadFeed(feed) {
    const tag = feed.dataset.tag;
    if (!tag) return;
    const filter = `tags~'${escapeFilter(tag)}'`;
    const url =
      `${PB}/api/collections/art/records` +
      `?perPage=${PER_PAGE}&sort=created&filter=${encodeURIComponent(filter)}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { items } = await res.json();
      const frag = document.createDocumentFragment();
      items.forEach((record) => frag.appendChild(renderItem(record)));
      feed.appendChild(frag);
    } catch (err) {
      console.error(`art feed (${tag}):`, err);
    }
  }

  document.querySelectorAll(".masonry[data-tag]").forEach(loadFeed);
})();
