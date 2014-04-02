(ns immutable-labs.svgs.rainbow-grid
  (:use immutable-labs.svg))

(def size 100)
(def square-color1 "rgba(192,227,243,0.8)")
(def square-color2 "rgba(197,227,243,0.8)")
(def gap 1)

(defsvg -main [& args]
  {:width "100%" :height "100%" }
  [:defs
   [:filter {:id "blur"}
    [:feGaussianBlur {:stdDeviation 8}]]
   [:pattern {:id "pattern"
              :width size :height size
              :patternUnits "userSpaceOnUse"
              :viewBox "0,0,200,200"}
    [:rect {:width 141.421 :height 141.421
            :x 0 :y (- 0 gap)
            :transform (str "rotate(-45 0 " (- 0 gap) ")")
            :fill square-color1}]
    [:rect {:width 141.421 :height 141.421
            :x 0 :y (+ 200 gap)
            :transform (str "rotate(-45 0 " (+ gap 200) ")")
            :fill square-color1}]
    [:rect {:width 141.421 :height 141.421
            :x (+ 200 gap) :y 0
            :transform (str "rotate(45 " (+ 200 gap) " 0)")
            :fill square-color2}]
    [:rect {:width 141.421 :height 141.421 
            :x (- 0 gap) :y 0
            :transform (str "rotate(45 " (- 0 gap) " 0)")
            :fill square-color2}]]
   [:linearGradient {:id "rainbow"}
    [:stop {:offset "0%" :stop-color "red"}]
    [:stop {:offset "42%" :stop-color "blue"}]
    [:stop {:offset "100%" :stop-color "green"}]]]
  [:rect {:fill "url(#rainbow)" :width "100%" :height "100%"}]
  [:rect {:fill (str "url(#pattern)")
          :x "-50%" :y "-50%"
          :filter "url(#blur)"
          :height "200%"
          :width "200%"}])
