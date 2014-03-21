(ns immutable-labs.test.macros) 

(defmacro is [testname statement]
  `(js/test ~testname
           (fn []
             (js/ok ~statement "Passed"))))
