#!/usr/bin/bash

sass --watch css/main.scss:style.css &
lein cljsbuild auto dev
