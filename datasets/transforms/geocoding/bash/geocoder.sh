#!/bin/bash

MAPSAPIURL="http://maps.googleapis.com/maps/api/geocode/json"

OUT=latlng.txt
 
[ -f ${OUT} ] && rm ${OUT}
[ -f results.json ] && rm results.json

i=1
while read line; do
  # Get address from column 3 and 4 of a CSV file provided as argument and prepare the string address. YMMV.
  address=`cut -d";" -f3-4 <<<$line | tr ';' '+' | tr ' ' '+'`
  echo -n "$i $address "
  curl -G -s --data sensor=true --data-urlencode address=$address "$MAPSAPIURL" -o results.json
#  cp results.json results_json/${i}_result.json
  # Parse json with jshon (http://kmkeen.com/jshon/)
  latlng=$(jshon -e results -a -e geometry -e location -e "lat" -u -p -e "lng" -u < results.json | paste -d, - -) 
  echo $latlng | tee -a ${OUT}

#  tail -1 latlng.txt
  i=$((i+1))
  sleep 1
done < $1
