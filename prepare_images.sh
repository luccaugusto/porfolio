#!/bin/bash

portfolio_dir="portfolio"

apply_watermark()
{
	if [ "$1" ]
	then
		image="$1"

		convert "$image" \
			-gravity SouthEast -draw "image over 3,3 0,0 images/lucca-tintas-marca-dagua.png" \
			"${image%%.*}.jpg"
	else
		echo "usage: ./prepare_image.sh <image>"
	fi
}

generate_data_file()
{
	dir_name="$1"
	echo "" > "_data/$dir_name.yml"
	for file in $(ls --sort=extension "$portfolio_dir/$dir_name")
	do
		filename="$file"
		extension=${file##*.}
		[ $extension == "png" ] && apply_watermark "$portfolio_dir/$dir_name/$file" && filename="${file%%.*}.jpg"
		echo "- nome: $filename" >> "_data/$dir_name.yml"
		echo "  link: /$portfolio_dir/$dir_name/$filename" >> "_data/$dir_name.yml"
		echo "" >> "_data/$dir_name.yml"
	done
}

if [ "$1" == '--all' ]
then
	shift
	for directory in $(ls $portfolio_dir)
	do
		generate_data_file "$directory"
	done
else
	apply_watermark "$1"
fi
