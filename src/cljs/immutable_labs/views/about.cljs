(ns immutable-labs.views.about
  (:require [dommy.core :as dommy]
            [cljs.core.async :as async
             :refer [<! >! chan take! put! timeout]]
            [immutable-labs.events :refer [event-channel]])
  (:use-macros
    [dommy.macros :only [sel1 node deftemplate]])
  (:require-macros
    [cljs.core.async.macros :as m :refer [go go-loop]]))

(deftemplate title []
  [:h2 "Solving problems for the the Web"])

(defn card 
  ([attrs title img body]
      [:.flippable-wrapper
        [:div ^:attrs (update-in attrs [:class] #(str "card " %))
         [:.front
          [:img {:src img :class "icon"}]
          [:h4 title] ] 
         [:.back 
          [:p body]]]]))

(defn random-temp-near-chan [initial]
  (let [out (chan)]
    (go-loop [t initial]
             (let [next-temp (+ t (- 0.25 (* 0.5 (rand))))]
               (>! out (.toFixed next-temp 1))
               (<! (timeout 1500))
               (recur next-temp)))
             out))

(defn live-on-chan! [chan render]
  (let [content (render)]
    (go-loop [dom-node content]
             (let [new-content (render (<! chan))]
               (-> dom-node
                   (dommy/replace! new-content))
               (recur new-content)))
    content))

(defn temperature-template 
  ([] [:div "Loading"])
  ([t] [:div 
        [:h4 "Office Temperature"]
        [:span.temp t ]]))

(defn live-office-temp! []
  (live-on-chan! (random-temp-near-chan 75) temperature-template))

(def ux-title "Usability")
(def ux-body "We immediaely focus on delivering a clean User experience. From the layout the the color scheme, we make sure every details assists in delivering high ease of use.")
(def ux-img "./assets/imgs/icon_29036.svg")

(def inno-title "Innovation")
(def inno-body "Our development team aggressivley embraces new technology. If you looking for a unique solution we would love to embrace the challenge.")
(def inno-img "./assets/imgs/icon_29036.svg")

(def usab-title "Compatibilty")
(def usab-body "Technology is everywhere and on countless different devices. Our team has professional experience delivering solutions for devices from TVs to mobile phones. We want to help deliver your content seamless across many devices to all of your customers. Whether they are at their desks or on a bus.")
(def usab-img "./assets/imgs/icon_29036.svg")

(defn render []
  [:#about
   [:.boxs
    [:.box.width2 
     (card {:class "compatibility"}
           ux-title ux-img ux-body)]
    [:.box.width2 
     (card {:class "innovation"}
           inno-title inno-img  inno-body )]
    [:.box.width2.clear 
     (card {:class "usability"}
           usab-title usab-img usab-body)]]])

(defn flip! [ele]
  (.log js/console ele)
  (dommy/toggle-class! ele :flipped))

(defn flippable! []
  (let [flip-chan (event-channel :.flippable-wrapper :click #(identity %))]
    (go (while true
          (flip! (<! flip-chan))))))

