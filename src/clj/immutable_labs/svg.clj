(ns immutable-labs.svg
  (:use hiccup.core))

(def svg-attrs {:xmlns "http://www.w3.org/2000/svg"})

(defmacro defsvg [name args & body]
  (let [has-attrs (= (-> body first type) (type {}))]
    (let [attrs (if has-attrs (merge (first body) svg-attrs) {})
          body (if has-attrs (rest body) body)]
      `(defn ~name ~args
         (html (vector :svg (merge ~attrs svg-attrs) ~@body))))))
