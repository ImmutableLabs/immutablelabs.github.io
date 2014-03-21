(ns immutable-labs.events
  (:require [cljs.core.async :as async
             :refer [<! >! chan put!]]
            [dommy.core :as dommy])
  (:use-macros
    [dommy.macros :only [sel node deftemplate]]))

(defn event-channel [selector event f]
  (let [out (chan)]
    (doseq [ele (sel selector)]
      (dommy/listen! ele event (fn [e] (put! out (f ele e)))))
  out))
