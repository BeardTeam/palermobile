#!/bin/bash

FILE="t2.orari"
OUT="t2.orari.new"

while read line; do   
   if [[ "${line}" =~ "<orari>" ]]; then

      # prende la prima parte della stringa, con i giorni di apertura
      giorni=$(echo $line | awk -F"dalle " '{print $1}')


      #sostituisce venerdi con 5
#      giorni=$(echo $giorni | sed 's/venerdi//g')
      
      # prende la seconda parte della stringa, con gli orari
      ore=$(echo $line | awk -F"dalle " '{print $2}')       
      
      # sostituisce il tag <orari> con <orari><giorni> e toglie "Aperto"
      first=$(echo $giorni | sed 's/<orari>/<orari><giorni>/g' | sed 's/Aperto//g')

      # chiude il tag <giorni>
      first="${first}</giorni>"
      
      second="<apertura>"

      # prende l'orario di apertura dalla stringa delle ore
      second=${second}$(echo $ore |awk -F" alle " '{print $1}')"</apertura>"

      # prende l'orario di chiusura dalla stringa delle ore
      third="<chiusura>"$(echo $ore |awk -F" alle " '{print $2}')"</chiusura>"

      # toglie un punto inutile
      third=$(echo $third |sed 's/<\/orari>//g' | sed 's/\.//g')

      fourth="</orari>"
      
#      $(echo $ore | sed 's/<\/orari>/<\/chiusura><\/orari>/g')

      to_write=${first}${second}${third}${fourth}
#      to_write=${first}${second}
#      echo ${line}" -> "${to_write}
#      echo $to_write
   else
      to_write=$line
   fi
   echo $to_write
done < $FILE
