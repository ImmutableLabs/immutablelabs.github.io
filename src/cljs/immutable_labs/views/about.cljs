(ns immutable-labs.views.about
  (:require [dommy.core :as dommy]
            [cljs.core.async :as async
             :refer [<! >! chan take! put! timeout]]
            [immutable-labs.events :refer [event-channel]])
  (:use-macros
    [dommy.macros :only [sel1 node deftemplate]])
  (:require-macros
    [cljs.core.async.macros :as m :refer [go go-loop]]))

(def header-text "Principles")

(def ux-title "Usability")
(def ux-summary "Keep it simple")
(def ux-body "We immediaely focus on delivering a clean User experience. From the layout the the color scheme, we make sure every details assists in delivering high ease of use.")
(def ux-img "./assets/imgs/icon_9428.svg")

(def inno-title "Innovation")
(def inno-summary "Cutting Edge")
(def inno-body "Our development team aggressivley embraces new technology. If you looking for a unique solution we would love to embrace the challenge.")
(def inno-img "./assets/imgs/icon_2465.svg")

(def compat-title "Compatibilty")
(def compat-summary "Works everywhere.")
(def compat-body "Technology is everywhere and on countless different devices. Our team has professional experience delivering solutions for devices from TVs to mobile phones. We want to help deliver your content seamless across many devices to all of your customers. Whether they are at their desks or on a bus.")
(def compat-img "./assets/imgs/icon_29888.svg")

(def services ["Mobile/Web content creation. From idea to full product." 
               "Quick prototype or demo"
               "User Interface Design"
               "Front-end components or modules"
               "Create a quality interactive widget"
               "Jumpstarting a big project"

               ])


(defn card 
  ([attrs title summary img body]
      [:.expandable-wrapper
        [:div ^:attrs (update-in attrs [:class] #(str "card " %))
         [:.front
          [:img {:src img :class "icon"}]
          [:h4 title] 
          [:p summary]]
         [:.back 
          [:p body]]]]))

(defn render []
  [:#about
   [:#who
    [:h4.title "Who we are"]
      [:p "Immutable Labs is a software development consultancy. We specialize in creating front-end software for mobile and the web. We hold a strong focus on user experience through carefully crafted and well tested user interface designs. We specialize in Clojure and Clojurescript devopment. However our team is comfortable across many languages, platforms and libraries."]
       [:.clear]]
   [:#principles
    [:h4.title header-text]
    [:.boxs
     [:.box.width2 
      (card {:class "usability"}
            ux-title ux-summary ux-img ux-body)]
     [:.box.width2 
      (card {:class "innovation"}
            inno-title inno-summary inno-img  inno-body )]
     [:.box.width2
      (card {:class "compatibility"}
            compat-title compat-summary compat-img compat-body)]
     [:.clear]]]
   [:#services
    [:h4.title "What we do"]
    [:.content
      (apply vector :ul
       (for [service services] [:li service]))]]])

(defn expand! [ele]
  (dommy/add-class! ele :expand))

(defn shrink! [ele]
  (dommy/remove-class! ele :expand))

;; (defn expandable! []
;;   (let [in-chan (event-channel :.expandable-wrapper :click #(identity %))
;;         out-chan (event-channel :.expandable-wrapper :mouseleave #(identity %))]
;;     (go (while true
;;           (expand! (<! (get-nin-chan))
;;           (shrink! (<! out-chan))))))

