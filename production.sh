#!/usr/bin/bash

lein cljsbuild once production
sass assets/css/main.scss:assets/style.css 2> /dev/null
for i in assets/imgs/*.svg; do inkscape "$i" --export-png="${i/svg/png}"; done
