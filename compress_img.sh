#!/bin/bash

pastas=("portfolio" "piadas")
for DIR in ${pastas[@]}
do
	for img in $(ls $DIR | grep png)
	do
		#remove extension
		name=${img%.*}
		convert -background black -alpha remove -strip -interlace Plane -gaussian-blur 0.05 -quality 85% $DIR/$img $DIR/$name.jpg
	done
done
