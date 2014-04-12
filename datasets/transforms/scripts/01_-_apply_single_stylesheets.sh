#!/bin/bash

DIRS="agenzie consolato turismo01 turismo02"
for i in $DIRS; do
   xml="$(echo ${i} | tr a-z A-Z).xml"
   xslt="${i}-transform_stylesheet.xslt"
   cd $i
   out="${i}.xml"
   cp -fa $out ${out}.bak
   xmlstarlet tr $xslt $xml > $out
   cd ..
done
