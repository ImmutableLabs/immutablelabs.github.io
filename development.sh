#!/usr/bin/bash

sass --watch assets/css/main.scss:assets/style.css &
lein cljsbuild auto dev
