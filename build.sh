#!/bin/sh

uploadarquivos()
{
	echo "" > _data/piadas.yml
	for FOTO in $(ls --sort=extension piadas)
	do
		echo "-   nome: $FOTO" >> _data/piadas.yml
		echo "    link: /piadas/$FOTO" >> _data/piadas.yml
		echo "" >> _data/piadas.yml
	done
}

#. compress_img.sh
#rm images/*.png
uploadarquivos

bundle update &&
JEKYLL_ENV=production &&
bundle exec jekyll build &&

cd _site && rm *.sh && cd ..
