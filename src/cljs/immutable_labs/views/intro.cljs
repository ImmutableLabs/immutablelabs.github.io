(ns immutable-labs.views.intro
  (:require [dommy.core]
            [dommy.template ])
  (:use-macros
    [dommy.macros :only [node deftemplate]]))

(defn node->string [node]
  (let [temp (.createElement js/document "div")]
      (.appendChild temp node)
    (.-innerHTML temp)))


  ;; [:#intro
  ;;  [:svg ^:attrs {:xmlns "http://www.w3.org/2000/svg" 
  ;;                 :width size :height size
  ;;                 :viewBox "0,0,200,200"}
  ;;   [:rect ^:attrs {:width 141.421 :height 141.421
  ;;                   :transform "rotate(-45)"
  ;;                   :fill "#222" }]
  ;;   [:rect ^:attrs {:width 141.421 :height 141.421 
  ;;                   :transform "rotate(45)" :fill "#444" }]]

(def size 100)
(def square-color1 "rgb(27,27,43)")
(def square-color2 "rgb(27,27,43)")
(def gap 1)

(deftemplate svg []
  [:svg ^:attrs {:width "100%" :height "100%" }
   [:defs
    [:filter {:id "blur"}
     [:feGaussianBlur {:stdDeviation 11}]]
    [:pattern ^:attrs {:id "pattern"
                       :width size :height size
                       :patternUnits "userSpaceOnUse"
                       :viewBox "0,0,200,200"}

     [:rect ^:attrs {:width 141.421 :height 141.421
                     :x 0 :y (- 0 gap)
                     :transform (str "rotate(-45 0 " (- 0 gap) ")")
                     :fill square-color1}]
     [:rect ^:attrs {:width 141.421 :height 141.421
                     :x 0 :y (+ 200 gap)
                     :transform (str "rotate(-45 0 " (+ gap 200) ")")
                     :fill square-color1}]
     [:rect ^:attrs {:width 141.421 :height 141.421
                     :x (+ 200 gap) :y 0
                     :transform (str "rotate(45 " (+ 200 gap) " 0)")
                     :fill square-color2}]
     [:rect ^:attrs {:width 141.421 :height 141.421 
                     :x (- 0 gap) :y 0
                     :transform (str "rotate(45 " (- 0 gap) " 0)")
                     :fill square-color2}]]
    [:linearGradient {:id "rainbow"}
     [:stop {:offset "0%" :stop-color "red"}]
     [:stop {:offset "42%" :stop-color "blue"}]
     [:stop {:offset "100%" :stop-color "green"}]]]
    [:rect ^:attrs {:fill "url(#rainbow)" :width "100%" :height "100%"}]
    [:rect ^:attrs {:fill "url(#pattern)"
                    :x "-50%" :y "-50%"
                    :filter "url(#blur)"
                    :height "200%"
                    :width "200%"}]])

(deftemplate render []
  [:#intro
   [:#background (svg)]

    [:h1 "Creating Online solutions for mobile and the Web."]])
