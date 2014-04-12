#!/bin/bash

[ $# -lt 1 ] && exit 1

INPUT=$1

cp $INPUT ${INPUT}.bak

cat ${INPUT}.bak \
   | sed 's/telefono>91[0-9]/telefono>091\//g' \
   | sed 's/telefono>\ 91[0-9]/telefono>091\//g' \
   | sed 's/telefono>091\ [0-9]/telefono>091\//g' \
   | sed 's/telefono>091[0-9]/telefono>091\//g' \
   | sed 's/fax>([0]*)91[0-9]/fax>091\//g' \
   | sed 's/fax>091[0-9]/fax>091\//g' \
   | sed 's/fax>091\ [0-9]/fax>091\//g' > $INPUT
