
# first
sed "s/\,\"\[[[:digit:]]\{1\,3\}\]\.citta/\}\,\{\"citta/g"

# second
sed "s/\[[[:digit:]]\{1\,3\}\]\.//g"


# third
sed "s/},/},\n/g"
