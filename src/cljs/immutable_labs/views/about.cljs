(ns immutable-labs.views.about
  (:require [dommy.core :as dommy]
            [immutable-labs.views.patterns :refer [metallic]]
            [cljs.core.async :as async
             :refer [<! >! chan take! put! timeout]]
            [immutable-labs.events :refer [event-channel]])
  (:use-macros
    [dommy.macros :only [sel1 node deftemplate]])
  (:require-macros
    [cljs.core.async.macros :as m :refer [go go-loop]]))

(def header-text "Principles")

(def ux-title "Usability")
(def ux-body "We immediaely focus on delivering a clean User experience. From the layout the the color scheme, we make sure every details assists in delivering high ease of use.")
(def ux-img "./assets/imgs/icon_29036.svg")

(def inno-title "Innovation")
(def inno-body "Our development team aggressivley embraces new technology. If you looking for a unique solution we would love to embrace the challenge.")
(def inno-img "./assets/imgs/icon_2465.svg")

(def compat-title "Compatibilty")
(def compat-body "Technology is everywhere and on countless different devices. Our team has professional experience delivering solutions for devices from TVs to mobile phones. We want to help deliver your content seamless across many devices to all of your customers. Whether they are at their desks or on a bus.")
(def compat-img "./assets/imgs/icon_29888.svg")


(defn card 
  ([attrs title img body]
      [:.flippable-wrapper
        [:div ^:attrs (update-in attrs [:class] #(str "card " %))
         [:.front
          [:img {:src img :class "icon"}]
          [:h4 title] ] 
         [:.back 
          [:p body]]]]))

(defn render []
  [:#about
   (metallic)
   [:#principles
    [:h4.title header-text]
    [:.boxs
     [:.box.width2 
      (card {:class "compatibility"}
            ux-title ux-img ux-body)]
     [:.box.width2 
      (card {:class "innovation"}
            inno-title inno-img  inno-body )]
     [:.box.width2.clear 
      (card {:class "usability"}
            compat-title compat-img compat-body)]]]
   [:#who
    [:h4 "Who are we?"]]])

(defn flip! [ele]
  (dommy/toggle-class! ele :flipped))

(defn flippable! []
  (let [in-chan (event-channel :.flippable-wrapper :mouseover #(identity %))
        out-chan (event-channel :.flippable-wrapper :mouseout #(identity %))]
    (go (while true
          (flip! (<! in-chan))
          (flip! (<! out-chan))))))

