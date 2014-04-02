(ns immutable-labs.svgs.metallic
  (:use immutable-labs.svg))

(def width 92)

(defsvg -main []
  {:width "300px" :height "300px"}
	[:defs
		[:linearGradient {:id "g"  :x2 "0" :y2 "100%"}
			[:stop {:offset "0%" :style "stop-color:#2e2e2e;stop-opacity:1" }]
			[:stop {:offset "100%" :style "stop-color:#2b2b2b;stop-opacity:1" }] ]
		[:pattern {:id "b" :patternUnits "userSpaceOnUse" :x "0" :y "0" 
               :width width :height (/ width 2)
               :viewBox "0 0 20 10"}
			[:rect {:fill "url(#g)" :x "9" :y "-6" :width "12" :height "12"}]
			[:rect {:fill "url(#g)" :x "9" :y "5" :width "12" :height "10"}]
			[:rect {:fill "url(#g)" :width "10" :height "10"}] ] 
		[:filter {:id "fuzz" :x "0" :y "0"}
			[:feTurbulence {:type "turbulence" :result "t" :baseFrequency ".2 .3" :numOctaves "5" :stitchTiles "stitch"}]
			[:feColorMatrix {:type "saturate" :in "t" :values "0"}]]]
	[:rect {:width "100%" :height "100%" :fill "url(#b)"}]
[:rect {:width "100%" :height "100%" :filter "url(#fuzz)" :opacity "0.05"}])
