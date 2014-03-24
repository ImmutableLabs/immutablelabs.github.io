(ns immutable-labs.views.patterns
  (:require [dommy.core]
            [dommy.template ])
  (:use-macros
    [dommy.macros :only [node deftemplate]]))


(let [pattern (gensym "pattern")
      size 100
      square-color1 "rgb(27,27,43)"
      square-color2 "rgb(27,27,43)"
      gap 1]
  (deftemplate rainbow-grid []
    [:svg ^:attrs {:width "100%" :height "100%" }
     [:defs
      [:filter {:id "blur"}
       [:feGaussianBlur {:stdDeviation 11}]]
      [:pattern ^:attrs {:id pattern
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
     [:rect ^:attrs {:fill (str "url(#" pattern ")")
                     :x "-50%" :y "-50%"
                     :filter "url(#blur)"
                     :height "200%"
                     :width "200%"}]]))

(deftemplate metallic []
  [:svg ^:attrs {:width "100%" :height "100%" }
   [:defs
    [:filter {:id "blur"}
     [:feGaussianBlur {:stdDeviation 11}]]
    [:pattern ^:attrs {:id "pattern2"
                       :width 100 :height 100
                       :patternUnits "userSpaceOnUse"
                       :viewBox "0,0,200,200"}

     [:rect ^:attrs {:width 200 :height 200 
                     :x 0 :y 0
                     :fill "#282828"}]]
    [:linearGradient {:id "rainbow2"}
     [:stop {:offset "0%" :stop-color "black"}]
     [:stop {:offset "42%" :stop-color "purple"}]
     [:stop {:offset "100%" :stop-color "green"}]]]
    [:rect ^:attrs {:fill "url(#rainbow2)" :width "100%" :height "100%"}]
    [:rect ^:attrs {:fill "url(#pattern2)"
                    :x "-50%" :y "-50%"
                    :filter "url(#blur)"
                    :height "200%"
                    :width "200%"}]])
