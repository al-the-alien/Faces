(ns shapes.dev
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html defhtml]]
            [om-tools.core :refer-macros [defcomponent]]
            [dommy.core :refer-macros [sel1]]
            [weasel.repl :as repl]
            [figwheel.client :as figwheel])
  (:refer-clojure :exclude [println]))


(defn println
  [& content]
  (js/console.log (apply pr-str content)))


(defonce app-state (atom {:text "Hello, development!"}))


(defn eyes
  [{:keys [x y width height]}]
  (let [x-offset (/ width (rand-nth (range 4 6)))
        rx x-offset
        ry (/ height (rand-nth (range 2.5 6 0.1)))
        cy (- y (/ height 6#_(rand-nth (range 4 8))))
        cx-offset (/ width x-offset)
        cx-a (- x (/ width 4) cx-offset)
        cx-b (+ x (/ width 4) cx-offset)
        prx (/ rx (rand-nth (range 1.5 8)))
        pry (/ ry (rand-nth (range 2 8)))
        pcx-offset (rand-nth (range (- prx rx) (- rx prx)))
        pcxa (+ cx-a pcx-offset)
        pcxb (+ cx-b pcx-offset)
        pcy (rand-nth (range (+ (- cy ry) pry) (- (+ cy ry) pry)))]
    (merge  {:cx-a cx-a :cx-b cx-b :cy cy :rx rx :ry ry
             :pcxa pcxa :pcxb pcxb :pcy pcy :prx prx :pry pry}
            (if (< pcxa cx-a)
              {:za 2 :zb 1}
              {:za 1 :zb 2}))))


(defhtml draw-eyes
  [{:keys [cy cx-a cx-b rx ry prx pry pcxa pcxb pcy za zb]}]
  [:g.eyes {:stroke "black" :stroke-width 3}
   [:defs
    [:clippath#pupil-a
     [:ellipse {:cx cx-a :cy cy
                :rx rx :ry ry}]]
    [:clippath#pupil-b
     [:ellipse {:cx cx-b :cy cy
                :rx rx :ry ry}]]]
   [:ellipse {:cx cx-a :cy cy
              :rx rx :ry ry :fill "white"
              :style {:z-index za}}]
   [:ellipse.pupil {:cx pcxa :cy pcy :rx prx :ry pry
                    :fill "black"
                    :clip-path "url(#pupil-a)"
                    :style {:z-index za}}]
   [:ellipse {:cx cx-b :cy cy
              :rx rx :ry ry :fill "white"
              :style {:z-index zb}}]
   [:ellipse.pupil {:cx pcxb :cy pcy :rx prx :ry pry
                    :fill "black"
                    :clip-path "url(#pupil-b)"
                    :style {:z-index zb}}]])

(defhtml face
  []
  (let [cx 400
        cy 200
        width 150
        height 200]
    {:x cx :y cy
     :width width
     :height height
     :rx (/ width 2)
     :ry (/ height 2)}))


(defcomponent app
  [data owner]
  (init-state [_]
    {:measurements (face)})
  (render-state [_ {:keys [measurements]}]
    (html
      [:div.container
       [:svg {:version 1.1
              :baseProfile "full"
              :width js/window.innerWidth
              :height js/window.innerHeight
              :xmlns "http://www.w3.org/2000/svg"}
        [:rect#background
         {:x 0 :y 0
          :width "100%"
          :height "100%"
          :fill "transparent"
          :on-click (fn [e]
                      (om/set-state! owner :shapes
                                     "hi"))}]
        (let [{:keys [x y rx ry width height]} measurements]
          [:g.face {:fill "white" :stroke "black" :stroke-width 3}
           [:ellipse {:cx x :cy y :rx rx :ry ry
                     :stroke-width 3
                     :fill "white"
                      :stroke "black"}]
           (draw-eyes (eyes measurements
                           #_{:x 400 :y 200 :width 150 :height 200}))])]])))



(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(figwheel/start {:build-id "dev"})

(om/root app app-state {:target (sel1 :#app)})
