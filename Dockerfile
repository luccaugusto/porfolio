FROM ruby:3.3-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
      build-essential \
      git \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler -v 2.7.0

WORKDIR /site

COPY Gemfile Gemfile.lock ./
RUN bundle install --full-index

EXPOSE 4000 35729

CMD ["bundle", "exec", "jekyll", "serve", \
     "--host", "0.0.0.0", \
     "--livereload", \
     "--force_polling"]
