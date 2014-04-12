#!/bin/bash

START=563
#1
END=582
#656
for i in `seq $START $END`; do 
   file="results_json/${i}_result.json"; 

   formatted_address=$(cat ${file} | jshon -e results -e 0 -e formatted_address) 
   #geometry -e location -e "lat" -u -p -e "lng" -u
   lat_lng=$(cat ${file} | jshon -e results -e 0 -e geometry -e location -e "lat" -u -p -e "lng" -u | paste -d, - -)

   echo "$i|${formatted_address}|${lat_lng}"
done
