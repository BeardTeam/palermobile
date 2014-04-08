#!/bin/bash

[ $# -lt 1 ] && exit 1

OUT=$1

# 1 
transforms/scripts/apply_single_stylesheets.sh

# 2
./transforms/scripts/concat.sh totale_grezzo.xml

# 3 
xmlstarlet tr transforms/02_-_transform_stylesheet_to_apply_to_total.xslt totale_grezzo.xml > $OUT

#> totale_mancante03_e_visitabili_2.xml
