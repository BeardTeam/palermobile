#!/bin/bash

DIRS="agenzie consolato turismo01 turismo02"
for i in $DIRS; do
   xml="$(echo ${i} | tr a-z A-Z).xml"
   xslt="${i}-transform_stylesheet.xslt"
   cd $i
   out="${i}_new.xml"
   xmlstarlet tr $xslt $xml > $out
   cd ..
done
