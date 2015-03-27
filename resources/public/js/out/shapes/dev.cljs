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


(defonce app-state (atom {:measurements
                          (core/face false ; sets dev?
                            :proportional? false)}))


(defn println
  [& content]
  (js/console.log (apply pr-str content)))


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


(defhtml dev-mode
  [data]
  [:g#dev-mode {:fill-opacity (if (:paused? data)
                                0.5
                                1)}
   [:text {:x 75 :y 50}
    "Dev Mode Controls"]
   [:g#dev-mode-on
    [:rect.on-button
     {:x 25 :y 60 :width 100 :height 50 :fill "darkseagreen"
      :on-click #(when-not (:paused? data)
                   (om/update! data :dev? true)
                   (om/update! data :measurements
                     (core/face (:dev? @data) :proportional? false)))}]
    [:text {:x (+ 25 50) :y (+ 60 30)
            :style {:pointer-events "none"}}
     "On"]]

   [:g#dev-mode-off
    [:rect.off-button
     {:x 25 :y 115 :width 100 :height 50 :fill "indianred"
      :on-click #(when-not (:paused? data)
                   (om/update! data :dev? false))}]
    [:text {:x (+ 25 50) :y (+ 115 30)
            :style {:pointer-events "none"}}
     "Off"]]])


(defhtml pause-mode
  [data]
  [:g#dev-mode
   [:text {:x 75 :y 200}
    "Control Changes"]
   [:g#dev-mode-on
    [:rect.on-button
     {:x 0 :y 210 :width 150 :height 50 :fill "darkseagreen"
      :on-click #(om/update! data :paused? false)}]
    [:text {:x (+ 25 50) :y (+ 210 30)
            :style {:pointer-events "none"}}
     "Resume changes"]]

   [:g#dev-mode-off
    [:rect.off-button
     {:x 0 :y 265 :width 150 :height 50 :fill "indianred"
      :on-click #(om/update! data :paused? true)}]
    [:text {:x (+ 25 50) :y (+ 265 30)
            :style {:pointer-events "none"}}
     "Pause changes"]]])


(defhtml section-controls
  [data]
  [:g#sections-toggle
   [:rect.toggle-button
    {:x 0 :y 335 :width 150 :height 50 :fill "steelblue"
     :on-click #(om/transact! data :sections? not)}]
   [:text {:x (+ 25 50) :y (+ 30 335)
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
   [:text#dev-info {:x 0 :y 25
                    :stroke "black"
                    :font-size 20}
    (str
      (if (:dev? data)
        "Dev mode on"
        "Dev mode off")
      (when (:paused? data)
        "\t:\tChanges Paused"))]

   
   [:g#controls {:text-anchor "middle"}
    (dev-mode data)
    (pause-mode data)
    (section-controls data)]

   (draw-color-scale ["white" "lightgrey" "darkgrey"
                      "grey" "dimgrey" "black"])])


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
                                            (core/face (:dev? @data)))))}]

         (dev-interface data)
         
         (core/draw-face (:measurements data))

         (when (:sections? data)
           (section-face (:measurements data)))]]])))



(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(figwheel/start {:build-id "dev"})

(om/root app app-state {:target (sel1 :#app)})
