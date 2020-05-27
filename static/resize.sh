#!/bin/bash

for file in ./*; do
  echo $file
  for j in {160,320,640,960,1280,1600,1920,2560}; do
    # if [ ! -d $j ]; then 
    # else 
    #   continue
    # fi
    
    mkdir $j
    if [ ! -f "./$j/$file" ]; then
      e="${file##*.}"
      f="${file%.*}"
      i="${f##*-}"
      out="$j/$i.$e"
      echo $out
      convert $file -resize ${j}x $out
    else
      continue
    fi
  done
done
