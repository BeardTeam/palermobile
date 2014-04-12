Building
========

    mvn install

Then create a file, json2csv:

    #!/bin/sh
    set -e
    exec java -Xmx1G -jar "$0" "$@"

Now append the json2csv.jar to it and set it as executable:

    cat target/json2csv.jar >>json2csv
    chmod +x json2csv

Now you can do things like:

    echo '{"col1":20, "col2":30, "map":{"col3":40}}' | json2csv -s col1,col2,map.col3

Which results in:

    "col1","col2","col3"
    "20","30","40"

You can use -f to rename the fields and -o to write to a file instead of stdout. If you include file
names on the command line they will be read in sequence rather than stdin.
