#!/bin/bash

filename="index.html"
local_url=".\/ui-managers.js"
prod_url="https:\/\/raw.githack.com\/kaltura\/playkit-js-ui-managers\/master\/dist\/ui-managers.js"

search="$local_url"
replace="$prod_url"

if [[ ("$1" == "dev") ]]; then
  search="$prod_url"
  replace="$local_url"
fi

cd 'demo' || exit
perl -i -pe"s/$search/$replace/" $filename
