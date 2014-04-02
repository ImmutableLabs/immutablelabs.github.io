(ns immutable-labs.views.intro
  (:require [dommy.core]
            [dommy.template ])
  (:use-macros
    [dommy.macros :only [node deftemplate]]))


(deftemplate render []
  [:#intro
   [:h1 "We create online solutions for mobile and the web"]])
