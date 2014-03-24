(ns immutable-labs.views.intro
  (:require [dommy.core]
            [dommy.template ]
            [immutable-labs.views.patterns :refer [rainbow-grid]])
  (:use-macros
    [dommy.macros :only [node deftemplate]]))


(deftemplate render []
  [:#intro
   (rainbow-grid)
   [:h1 "Creating Online solutions for mobile and the Web."]])
