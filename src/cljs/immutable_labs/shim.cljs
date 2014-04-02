(ns immutable-labs.shim
  (:require [goog.dom :as g]
            [clojure.string :as s]))

(defn convert-to-png [ele]
  (set! (.-src ele) (s/replace (.-src ele) #"svg" "png")))

(defn svg-test []
  (-> js/document 
      (.-implementation) 
      (.hasFeature "http://www.w3.org/TR/SVG11/feature#Image" "1.1")))

(defn ->Array [coll] (.call js/Array.prototype.slice coll))

(defn svg []
  (if (svg-test)
    nil
    (let [eles (.getElementsByTagName js/document "img")]
      (doseq [e (->Array eles)] (convert-to-png e)))))
