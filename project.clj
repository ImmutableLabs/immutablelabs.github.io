(defproject immutable-labs "0.1.0-SNAPSHOT"
  :description "Landing page for Immutable Labs"
  :url "http://immutablelabs.com"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [hiccup "1.0.5"]
                 [me.raynes/fs "1.4.4"]
                 [secretary "1.1.0"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/clojurescript "0.0-2173"]]

  :plugins [[lein-cljsbuild "1.0.0-alpha2"]
            [lein-watcher "0.2.2"]
            [lein-ancient "0.5.5"]
            [lein-git-deps "0.0.1-SNAPSHOT"]]
  

  :git-dependencies [["https://github.com/immutablelabs/dommy.git"]]

  :source-paths ["src/clj" ".lein-git-deps/dommy/src"]
  
  :lein-watcher {:input-dir "src/clj/immutable_labs/svgs/"
                 :output-dir "assets/imgs/"
                 :output-type "svg"}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs" 
                                       ".lein-git-deps/dommy/src"]
                        :compiler {
                                   :output-to "dev.js"
                                   :output-dir "out/dev"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "production"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "production.js"
                                   :pretty-print :false
                                   :externs [ "src/js/lib/headroom2.js"]
                                   :optimizations :advanced}}

                       {:id "test"
                        :source-paths ["src/cljs" "test/cljs"]
                        :compiler {
                                   :output-to "test.js"
                                   :output-dir "out/test"
                                   :optimizations :none
                                   :source-map true}}]})
