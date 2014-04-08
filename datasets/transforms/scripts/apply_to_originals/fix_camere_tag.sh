#!/bin/bash

while read line; do
   # fix rows ending with direttore but starting with camere
#   if [ ! -z "$( echo "${line}" | egrep -n -e '[0-9]</direttore>')" ];

   # fix rows ending with direttore but starting with descrizione
   if [ ! -z "$( echo "${line}" | grep '<descrizione>' | grep '</camere>' )" ];
   then
#      echo AAAAA
      to_write=$(echo ${line} | sed 's/camere/descrizione/p')
   else
      to_write=${line}
   fi
   echo $to_write
done < TURISMO01.xml
