#!/bin/bash

for file in ./full/*; do
  for j in {160,320,640,960,1280,1600,1920,2560}; do
    fil="${file##*/}"
    if [ ! -f "./$j/$fil" ]; then
      echo $j $fil
      e="${file##*.}"
      f="${fil%.*}"
      convert $file -resize ${j}x ${j}/${f}.${e}
    else
      continue
    fi
  done
done
