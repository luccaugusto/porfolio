#!/bin/sh

bundle update &&
JEKYLL_ENV=production &&
bundle exec jekyll build &&

cd _site && rm *.sh && cd ..
