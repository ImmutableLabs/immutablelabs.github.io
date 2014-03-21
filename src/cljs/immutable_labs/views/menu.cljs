(ns immutable-labs.views.menu
  (:require [dommy.core]
            [clojure.string :refer [lower-case ]])
  (:use-macros
    [dommy.macros :only [node deftemplate]]))

(enable-console-print!)
(def categories ["About" "Services" "Hire Us"])
(defn rotate! [cube x y]
  (set! (.-x (.-rotation cube)) x)
  (set! (.-y (.-rotation cube)) y))

(defn inc-rotate! [cube x y]
  (rotate! cube (-> cube .-rotation .-x (+ x))
           (-> cube .-rotation .-y (+ y))))

(defn color-cube! [cube colors]
  (let [geometry (.-geometry cube)
        faces (.-faces geometry)]
    (doseq [i (range (count colors))]
      (let [color ((vec colors ) i)]
        (print color)
        (doseq [face [(* i 2) (+ (* i 2) 1)]]
          (-> faces (aget face) .-color (.setHex color)))))))

(defn logo-renderer [width height colors]
  (let [renderer (js/THREE.WebGLRenderer. (js-obj "antialias" true 
                                                  "alpha" true))
        scene (js/THREE.Scene.)
        camera (js/THREE.PerspectiveCamera. 45 (/ width height) 0.41 0)]
    (.setSize renderer width height)
    (let [geometry (js/THREE.CubeGeometry. 2 2 2)
          material (js/THREE.MeshBasicMaterial.
                     (js-obj "color" 0xffffff 
                             "vertexColors" (.-FaceColors js/THREE)))
          cube (js/THREE.Mesh. geometry material)]

      (rotate! cube 1.04 0.35)
      (.add scene cube)
      (color-cube! cube colors)
      (set! (.-z (.-position camera)) 5)
      (.render renderer scene camera)
      (def anim (fn [] 
                  (inc-rotate! cube 0.01 0.02)
                  (js/requestAnimationFrame anim)
                  (.render renderer scene camera)))
      {:renderer renderer
       :cube cube})))

(deftemplate logo [colors]
  (let [zip #(map vector % %2)
        renderer (logo-renderer 35 35 colors)]
    [:#logo 
     (.-domElement (:renderer renderer))
     [:h1 "Immutable" " " 
      [:span.rainbow-word (for [[letter] "Labs" ]
                            [:span letter])]] ]))

(defn render [colors]
  [:#menu 
   (logo colors)
   [:#nav-menu
    (for [category categories]
      (if (= category "Hire us")
        [:div 
         [:a {:href "mailto:nicholasbardy@gmail.com"}]
         category]
        [:div
         [:a ^:attrs {:href (str "#" (lower-case category))}
          category]]))]])
