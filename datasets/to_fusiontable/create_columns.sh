#!/bin/bash

OUT="columns.js"
echo "var columnsToInsert = {" >> $OUT

for i in id nome  indirizzo   cap   citta geolocazione telefono fax   mobile   email web   tipi  tipi_specifici agenzia.intestazione consolato.stato   consolato.console consolato.pec  consolato.orari.giorni  consolato.orari.apertura   consolato.orari.chiusura   consolato.orari.note accoglienza.stelle   accoglienza.camere   accoglienza.sale_meeting   accoglienza.residences  accoglienza.descrizione accoglienza.direttore   accoglienza.gestione divertimento-e-ristoro.cucina divertimento-e-ristoro.orari.giorni divertimento-e-ristoro.orari.apertura  divertimento-e-ristoro.orari.chiusura  divertimento-e-ristoro.orari.note   divertimento-e-ristoro.informazioni icon; do
   echo "'${i}': 'STRING'," >> $OUT
done

echo "};" >> $OUT

cp ${OUT} ${OUT}.bak

cat ${OUT}.bak | sed "s/'geolocazione': 'STRING'/'geolocazione': 'LOCATION'/g" | sed 's/\./#/g' > ${OUT}

rm -f ${OUT}.bak
