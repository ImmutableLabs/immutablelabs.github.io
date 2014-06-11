(ns immutable-labs.core
  (:require [immutable-labs.views.intro :as intro]
            [immutable-labs.views.about :as about]
            [immutable-labs.views.menu :as menu]
            [immutable-labs.blog :as blog]
            [immutable-labs.shim :as shim]
            [dommy.core :as dommy])
  (:use-macros [dommy.macros :only [sel1 node]]))

(defn render [& content]
  (dommy/clear! (sel1 :#main)) 
  (let [e (node (menu/render [0x2ecc71 0xDF3F2F
                              0x8C35CF 0x8C35CF
                              0x2ecc71 0xDF3F2F ]))]
    (dommy/append! (sel1 :#main) e)
    (.init (js/Headroom. e (js-obj "tolerance" 50 "offset" 180))))
  (doseq [item content]
    (dommy/append! (sel1 :#main) item))
  (shim/svg))

(defn render-main []
  (render (intro/render) (about/render)))

(defn render-blog []
  (render (blog/render)))


(-> js/Path (.map "#/main") (.to render-main))
(-> js/Path (.map "#/blog") (.to render-blog))

(.root js/Path "#/main")
(.listen js/Path)
