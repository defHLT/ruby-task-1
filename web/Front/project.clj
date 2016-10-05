(defproject Front "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [cljs-http "0.1.42"]
                 [hiccups "0.3.0"]
                 ;[cljsjs/jquery "2.2.4-0"]
                 ]

  :plugins [[lein-cljsbuild "1.1.4"]]
  :cljsbuild {:builds [{:source-paths ["src-cljs"]
                       :compiler {:output-to "../../public/generated/main.js"
                                  :optimizations :whitespace
                                  :pretty-print true}}]})
