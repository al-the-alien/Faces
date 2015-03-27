(ns shapes.main
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [om-tools.core :refer-macros [defcomponent]]
            [dommy.core :refer-macros [sel1]]
            [shapes.core :as core]))

(defonce app-state (atom {:measurements
                          (core/face false ; sets avg?
                            :proportional false)}))

(defn interface
  [data new-face]
  [:g
   [:text#header {:x (/ js/window.innerWidth 2)
                  :y 25
                  :text-anchor "middle"
                  :stroke "#222"
                  :fill "#222"
                  :font-size 20}
    "Procedurally Generated Faces"]
   [:g#click-me
    {:on-click #(om/update! data :measurements
                  (core/face (:avg? @data)))
     :style {:cursor "pointer"}}
    [:rect {:x (- (:x new-face) 25)
            :y (:y new-face)
            :width 100 :height 50
            :rx 10 :ry 10
            :fill "#DDD"
            :stroke "#AAA"
            :stroke-width 3}]
    [:text {:x (+ (:x new-face) 25)
            :y (+ (:y new-face) 30)
            :stroke "#333"
            :fill "#333"
            :text-anchor "middle"}
     "New face"]]])


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
                            :-webkit-user-select "none"

                            :cursor "default"}}
         [:rect#background {:x 0 :y 0 :width "100%" :height "100%"
                            :fill "white"}]

         (interface data {:x 50 :y (/ js/window.innerHeight 10)})

         (core/draw-face (:measurements data))]]])))

(om/root app app-state {:target (sel1 :#app)})

