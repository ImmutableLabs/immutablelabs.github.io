(defproject immutable-labs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/clojurescript "0.0-2173"]]
  

  :plugins [[lein-cljsbuild "1.0.0-alpha2"]
            [lein-git-deps "0.0.1-SNAPSHOT"]]

  :git-dependencies [["https://github.com/immutablelabs/dommy.git"]]
  :source-paths ["src" ".lein-git-deps/dommy/src"]


  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs" 
                                       ".lein-git-deps/dommy/src"]
                        :compiler {
                                   :output-to "index.js"
                                   :output-dir "out/dev"
                                   :optimizations :none
                                   :source-map true}}

                       {:id "test"
                        :source-paths ["src/cljs" "test/cljs"]
                        :compiler {
                                   :output-to "test.js"
                                   :output-dir "out/test"
                                   :optimizations :none
                                   :source-map true}}]})
