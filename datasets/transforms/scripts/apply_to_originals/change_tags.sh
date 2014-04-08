#!/bin/bash

declare -A TAGS
# TAGS[main>]="luoghi>"
# TAGS[DATA_RECORD>]="luogo>"
# TAGS[DENOMINAZIONE>]="nome>"
# TAGS[categoria>]="tipo>"
# TAGS[EMAIL>]="email>"
# TAGS[WEB>]="web>"
# TAGS[FAX>]="fax>"
# TAGS[TELEFONO>]="telefono>"
# TAGS[MOBILE>]="mobile>"
# TAGS[DESCRIZIONE>]="tipo>"
# TAGS[CATEGORIA>]="tipo>"
# TAGS[STAR_NUMERO>]="stelle>"
# TAGS[INDIRIZZO>]="indirizzo>"
# TAGS[CAP>]="cap>"
# TAGS[CITTA>]="citta>"
# TAGS[PREZZI_NOTE>]="prezzi>"
#TAGS[PEC>]="pec>"
# TAGS[ID>]="id>"

TAGS[\/pec>]="\/pec>\n<tipo>consolato<\/tipo>"

# TAGS[<APERTURA_NOTE>]="<orari><APERTURA_NOTE>"
# TAGS[</CHIUSURA_NOTE>]="</CHIUSURA_NOTE></orari>"
# TAGS[<GESTORE_nome>]="<gestore><nome>"
# TAGS[</GESTORE_web>]="</web></gestore>"

#echo ${!TAGS[@]}

for file in CONSOLATO*xml; do
   echo $file
   for old in ${!TAGS[@]}; do
      new=${TAGS[$old]}
#      echo $old $new 
#      sed "s/$old/$new/g" $file
      sed -i'' -e "s/$old/$new/g" $file
   done
   echo
done
