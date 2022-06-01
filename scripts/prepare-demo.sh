#!/bin/bash

filename="index.html"
local_url="<script src=\".\/playkit-ui-managers.js\"><\/script>"
prod_url="<script src=\"https:\/\/raw.githack.com\/kaltura\/playkit-js-ui-managers\/master\/dist\/playkit-ui-managers.js\"><\/script>"

search="$local_url"
replace="$prod_url"

if [ "$1" = "dev" ]; then
  search="$prod_url"
  replace="$local_url"
fi

cd 'demo' || exit
perl -i -pe"s/$search/$replace/" $filename
