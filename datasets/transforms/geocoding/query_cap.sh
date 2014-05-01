#!/bin/bash

[ $# -lt 1 ] && exit 1

CAP=$1

grep $CAP cap_geocoding_reduced.txt
