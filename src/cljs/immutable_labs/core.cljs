(ns immutable-labs.core
  (:require [immutable-labs.views.intro :as intro]
            [immutable-labs.views.about :as about]
            [immutable-labs.views.menu :as menu]
            [dommy.core :as dommy])
  (:use-macros [dommy.macros :only [sel1 node]]))


(let [e (node (menu/render [0x2ecc71 0xDF3F2F
                      0x8C35CF 0x8C35CF
                      0x2ecc71 0xDF3F2F ]))]
  (dommy/append! (sel1 :body) e)
  (.init (js/Headroom. e (js-obj "tolerance" 50 "offset" 180))))
(dommy/append! (sel1 :body) (intro/render))
(dommy/append! (sel1 :body) (about/render))
(about/flippable!)
