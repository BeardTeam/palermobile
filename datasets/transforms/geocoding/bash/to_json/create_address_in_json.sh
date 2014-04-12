#!/bin/bash

out="address.json"
echo "{ [" > $out
while read line; do
  address=${line}
  echo "{address: \"${address}\"}," >> $out
done < address.txt
echo "] }" >> $out