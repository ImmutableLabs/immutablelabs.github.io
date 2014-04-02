(ns immutable-labs.views.menu
  (:require [dommy.core]
            [clojure.string :refer [lower-case ]])
  (:use-macros
    [dommy.macros :only [node deftemplate]]))

(enable-console-print!)
(def categories ["About" "Principles" "Blog" "Hire Us"])
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

(deftemplate logo [colors]
  (let [zip #(map vector % %2)]
    [:#logo 
     [:img {:src "assets/imgs/logo.svg"}]
     [:h1 "Immutable" " " 
      [:span.rainbow-word (for [[letter] "Labs" ]
                            [:span letter])]] ]))

(defn render [colors]
  [:#menu 
   (logo colors)
   [:#nav-menu
    (for [category categories]
      [:div
       (case category 
         "Hire Us" 
         [:a {:href "mailto:nicholasbardy@gmail.com"}
          category]
         "Blog" 
         [:a {:href "blog.html"} category]
         [:a ^:attrs {:href (str "#" (lower-case category))}
          category])])]])
