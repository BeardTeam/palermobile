#!/bin/bash

[ $# -lt 1 ] && exit 1

OUT=$1

# 1 apply stylesheet for each dataset
transforms/scripts/01_-_apply_single_stylesheets.sh

# 2 - concatenate all
total_not_padded="_not_padded.xml"
./transforms/scripts/02_-_concat.sh $total_not_padded 

# 3 - replace bad telephone number
./transforms/scripts/03_-_replace_bad_telephones.sh $total_not_padded

# 4 apply global stylesheet (padding, icon, etc)
xslt_sheet="total-transform_stylesheet.xslt"
xmlstarlet tr transforms/xslt/${xslt_sheet} $total_not_padded > $OUT

# 5 generate csv
java -cp ../appalermo-java/bin net.iubris.appalermo.converter.xml.XMLToCSV $OUT
