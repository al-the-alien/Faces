(ns shapes.main
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [om-tools.core :refer-macros [defcomponent]]
            [dommy.core :refer-macros [sel1]]
            [shapes.core :as core]))

(defonce app-state (atom {:measurements
                          (core/face false ; sets avg?
                            :proportional false)}))

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
                                            (core/face (:avg? @data)))))}]

         (core/draw-face (:measurements data))]]])))

(om/root app app-state {:target (sel1 :#app)})

