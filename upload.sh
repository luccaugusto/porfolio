#!/bin/bash

echo "UPLOADING"
rsync -avz _site/ root@luccaaugusto.xyz:/var/www/portfolio.luccaaugusto.xyz/html/

echo "UPDATE GIT"
git add .
git commit && #-m "$MSG"
git push
