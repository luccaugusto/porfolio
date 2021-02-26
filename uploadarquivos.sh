#!/bin/bash

#mv _data/portfolio.yml _data/old-portfolio.yml
#echo "" > _data/portfolio.yml
#for FOTO in $(ls portfolio | grep jpg)
#do
#	echo "-   nome: $FOTO" >> _data/portfolio.yml
#	echo "    link: /portfolio/$FOTO" >> _data/portfolio.yml
#done 

echo "" > _data/piadas.yml
for FOTO in $(ls piadas)
do
	echo "-   nome: $FOTO" >> _data/piadas.yml
	echo "    link: /piadas/$FOTO" >> _data/piadas.yml
done 
