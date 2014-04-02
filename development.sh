#!/usr/bin/bash

sass --watch assets/css/main.scss:assets/style.css &
lein watcher &
lein cljsbuild auto dev
