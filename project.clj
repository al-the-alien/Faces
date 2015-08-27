(defproject shapes "0.1.0-SNAPSHOT"
  :description ""
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "0.8.8" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.12.2-4"]
                 [sablono "0.3.4"]
                 [prismatic/om-tools "0.3.10"]
                 [prismatic/dommy "1.0.0"]
                 [environ "1.0.0"]]
  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-environ "1.0.0"]]
  :profiles {:dev {:dependencies [[org.clojure/tools.namespace "0.2.11"]]
                   :plugins [[lein-figwheel "0.3.5"]]
                   :source-paths ["dev"]
                   :figwheel {:http-server-root "public"
                              :server-port 3449
                              :nrepl-port 4005
                              :css-dirs "resources/public/css"
                              :repl false
                              :server-logfile ".figwheel"}}}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src" "dev"]
                        :compiler {:main shapes.dev
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"
                                   :asset-path "js/out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main shapes.main
                                   :output-to "resources/public/js/main.js"
                                   :asset-path "js/out"
                                   :pretty-print false
                                   :optimizations :advanced}}]}
  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"])
