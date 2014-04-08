#!/bin/bash

[ $# -lt 1 ] && exit 1

OUT=$1

SUFFIX="_new"
TO_CONCAT=()
TO_CONCAT=("${TO_CONCAT[@]}" "agenzie/agenzie${SUFFIX}")
TO_CONCAT=("${TO_CONCAT[@]}" "consolato/consolato${SUFFIX}")
TO_CONCAT=("${TO_CONCAT[@]}" "turismo01/turismo01${SUFFIX}")
TO_CONCAT=("${TO_CONCAT[@]}" "turismo02/turismo02${SUFFIX}")

#OUT="tot.xml"
echo '<?xml version="1.0" encoding="UTF-8"?>' > $OUT
echo "<palermo-opendata>" >> $OUT
echo "<luoghi>" >> $OUT

for i in ${TO_CONCAT[@]}; do
   cat ${i}.xml | grep -v "luoghi>" | grep -v "<?xml" >> $OUT
done

echo "</luoghi>" >> $OUT
echo "</palermo-opendata>" >> $OUT
