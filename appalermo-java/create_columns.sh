#!/bin/bash

OUT="/tmp/columns.js"
echo "var ColumnsToInsert = {" >> $OUT

for i in id nome  indirizzo   cap   citta telefono fax   mobile   email web   tipi  tipi_specifici agenzia.intestazione consolato.stato   consolato.console consolato.pec  consolato.orari.giorni  consolato.orari.apertura   consolato.orari.chiusura   consolato.orari.note accoglienza.stelle   accoglienza.camere   accoglienza.sale_meeting   accoglienza.residences  accoglienza.descrizione accoglienza.direttore   accoglienza.gestione divertimento-e-ristoro.cucina divertimento-e-ristoro.orari.giorni divertimento-e-ristoro.orari.apertura  divertimento-e-ristoro.orari.chiusura  divertimento-e-ristoro.orari.note   divertimento-e-ristoro.informazioni; do
   echo "'${i}': 'STRING'," >> $OUT
done

echo "};" >> $OUT
