(ns shapes.dev
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html defhtml]]
            [om-tools.core :refer-macros [defcomponent]]
            [dommy.core :refer-macros [sel1]]
            [weasel.repl :as repl]
            [figwheel.client :as figwheel]
            [shapes.proportional :as p]
            [shapes.core :as core])
  (:refer-clojure :exclude [println]))


(defn println
  [& content]
  (js/console.log (apply pr-str content)))


(defn development-measurements
  [avg?]
  (let [w js/window.innerWidth
        h js/window.innerHeight
        m (min w h)
        max-dimension (max 75 (- m (/ m 5)))
        min-dimension (max 75 (/ m 2))]

    ;; Adding 50 to account for the control buttons
    {:cx (+ (/ w 2) 50)  ;; 400

     :cy (/ h 2)
     :width (if avg?
              (core/avg min-dimension max-dimension)
              (core/rand-float min-dimension max-dimension))
     :height (if avg?
               (core/avg min-dimension max-dimension)
               (core/rand-float min-dimension max-dimension))}))

(defn face
  [avg? & {:keys [proportional?]}]
  (if proportional?
    (-> (p/basic-measurements avg?)
      (p/head avg?)
      (p/eyes avg?)
      (p/nose avg?))
    (-> (development-measurements avg?)
      (core/head avg?)
      (core/eyes avg?)
      (core/nose avg?)
      (core/mouth avg?))))


(defhtml section-face
  [{:keys [horizontal-a horizontal-b horizontal-c vertical-a vertical-b
           head-cx head-cy head-rx head-ry]}]
  [:g#sections {:stroke "lightgrey"}
   [:line {:x1 (- head-cx head-rx 5) :y1 horizontal-a
           :x2 (+ head-cx head-rx 5) :y2 horizontal-a}]
   [:line {:x1 (- head-cx head-rx 5) :y1 horizontal-b
           :x2 (+ head-cx head-rx 5) :y2 horizontal-b}]
   [:line {:x1 (- head-cx head-rx 5) :y1 horizontal-c
           :x2 (+ head-cx head-rx 5) :y2 horizontal-c}]
   [:line {:x1 vertical-a :y1 (- head-cy head-ry 5)
           :x2 vertical-a :y2 (+ head-cy head-ry 5)}]
   [:line {:x1 vertical-b :y1 (- head-cy head-ry 5)
           :x2 vertical-b :y2 (+ head-cy head-ry 5)}]])


(defhtml avg-mode
  [data]
  [:g#dev-mode {:fill-opacity (if (:paused? data)
                                0.5
                                1)}
   [:text {:x 80 :y 50}
    "Average Mode"]
   [:g#dev-mode-on
    [:rect.on-button
     {:x 25 :y 60 :width 100 :height 50 :fill "darkseagreen"
      :stroke (if (and (:avg? data) (not (:paused? data)))
                "black"
                "transparent")
      :stroke-width 3
      :on-click #(when-not (:paused? data)
                   (om/update! data :avg? true)
                   (om/update! data :measurements
                     (face (:avg? @data) :proportional? false)))}]
    [:text {:x (+ 25 50) :y (+ 60 30)
            :style {:pointer-events "none"}}
     "On"]]

   [:g#dev-mode-off
    [:rect.off-button
     {:x 25 :y 115 :width 100 :height 50 :fill "indianred"
      :stroke (if (or (:avg? data) (:paused? data))
                "transparent"
                "black")
      :stroke-width 3
      :on-click #(when-not (:paused? data)
                   (om/update! data :avg? false))}]
    [:text {:x (+ 25 50) :y (+ 115 30)
            :style {:pointer-events "none"}}
     "Off"]]])


(defhtml pause-mode
  [data]
  [:g#pause-mode
   [:text {:x 80 :y 200}
    "Face Generation"]
   [:g#pause-mode-off
    [:rect.on-button
     {:x 5 :y 210 :width 150 :height 50 :fill "darkseagreen"
      :stroke (if-not (:paused? data)
                "black"
                "transparent")
      :stroke-width 3
      :on-click #(om/update! data :paused? false)}]
    [:text {:x (+ 30 50) :y (+ 210 30)
            :style {:pointer-events "none"}}
     "Enabled"]]

   [:g#pause-mode-on
    [:rect.off-button
     {:x 5 :y 265 :width 150 :height 50 :fill "indianred"
      :stroke (if (:paused? data)
                "black"
                "transparent")
      :stroke-width 3
      :on-click #(om/update! data :paused? true)}]
    [:text {:x (+ 30 50) :y (+ 265 30)
            :style {:pointer-events "none"}}
     "Disabled"]]])


(defhtml section-controls
  [data]
  [:g#sections-toggle
   [:rect.toggle-button
    {:x 5 :y 335 :width 150 :height 50 :fill "steelblue"
     :on-click #(om/transact! data :sections? not)}]
   [:text {:x (+ 30 50) :y (+ 30 335)
           :style {:pointer-events "none"}}
    "Toggle sections"]])


(defhtml draw-color-scale
  [color-scale]
  (for [[i color] (map-indexed vector color-scale)]
    [:g.color {:text-anchor "middle"}
     [:rect {:x (* i 50) :y 410
             :width 45 :height 30
             :stroke "black"
             :fill color}]
     [:text {:x (+ 25 (* i 50)) :y (+ 410 45)
             :stroke "black"
             :font-family "Verdana"
             :font-size 10}
      color]]))


(defhtml dev-interface
  [data]
  [:g#dev-interface

   [:text#instructions {:x (/ js/window.innerWidth 2)
                        :y 25
                        :text-anchor "middle"
                        :stroke "black"
                        :font-size 20}
    "Click anywhere on the background to generate a new face"]

   
   [:g#controls {:text-anchor "middle"}
    (avg-mode data)
    (pause-mode data)
    (section-controls data)]

   (draw-color-scale ["white" "lightgrey" "darkgrey"
                      "grey" "dimgrey" "black"])])


(defonce app-state (atom {:measurements
                          (face false ; sets avg?
                            :proportional? false)}))


(defcomponent app
  [data owner]
  (render [_]
    (html
      [:div.container
       [:svg {:version 1.1
              :baseProfile "full"
              :width js/window.innerWidth
              :height js/window.innerHeight
              :xmlns "http://www.w3.org/2000/svg"}
        [:g#canvas {:font-family "Verdana"                          
                    :style {:user-select "none"
                            :-ms-user-select "none"
                            :-moz-user-select "none"
                            :-webkit-user-select "none"}}
         [:rect#background {:x 0 :y 0 :width "100%" :height "100%"
                            :fill "white"
                            :on-click (fn [e]
                                        (when-not (:paused? data)
                                          (om/update! data :measurements
                                            (face (:avg? @data)))))}]

         (dev-interface data)

         (core/draw-face (:measurements data))

         (when (:sections? data)
           (section-face (:measurements data)))]]])))



(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(figwheel/start {:build-id "dev"})

(om/root app app-state {:target (sel1 :#app)})
