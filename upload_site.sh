#!/bin/bash

#. compress_img.sh
#rm portfolio/*.png
#rm piadas/*.png
#. uploadarquivos.sh

bundle update && 
JEKYLL_ENV=production && 
bundle exec jekyll build && 
scp -r _site/* lucca@luccaaugusto.xyz:/var/www/portfolio.luccaaugusto.xyz/html/
