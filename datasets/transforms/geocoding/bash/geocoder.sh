#!/bin/bash

MAPSAPIURL="http://maps.googleapis.com/maps/api/geocode/json"

IN="$1"
OUT="$2"
 
LAR="last_address_results.json"
[ -f ${OUT} ] && rm ${OUT}
[ -f ${LAR} ] && rm ${LAR}

i=1
while read line; do
  # Get address from column 3 and 4 of a CSV file provided as argument and prepare the string address. YMMV.
#  address=`cut -d";" -f3-4 <<<$line | tr ';' '+' | tr ' ' '+'`
  address="${line}"
#  curl -G -s --data sensor=true --data-urlencode address=$address "$MAPSAPIURL" -o ${LAR}
  curl -G -s --data sensor=true --data-urlencode address="${address}" "$MAPSAPIURL" -o ${LAR}
#  cp results.json results_json/${i}_result.json
  # Parse json with jshon (http://kmkeen.com/jshon/)

  formatted_address=$(jshon -e results -e 0 -e formatted_address < ${LAR})
#  latlng=$(jshon -e results -a -e geometry -e location -e "lat" -u -p -e "lng" -u < ${LAR} | paste -d, - -) # dist, using -a = as map
  latlng=$(jshon -e results -a -e geometry -e location -e "lat" -u -p -e "lng" -u < ${LAR} | paste -d, - -) # mine, using -e 0 = first array element


  echo -e "$i\t${address}\t${formatted_address}\t${latlng}"
  echo "$i|${address}|${formatted_address}|${latlng}" >> ${OUT}
#  echo ${latlng} | tee -a ${OUT}

#  tail -1 latlng.txt
  i=$((i+1))
  sleep 1
done < $IN
