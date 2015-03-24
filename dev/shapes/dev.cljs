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



(defn pupils
  [{:keys [x y width height ecxa ecxb ecy rx ry cy]}
   dev?]
  (let [pr (if dev?
             (/ (/ (+ rx ry) 2) 3)
             (/ (/ (+ rx ry) 2) (rand-nth (range 2 8))))
        
        
        pcxa ecxa
        pcxb ecxb
        pcy ecy

        sr (/ pr 4)
        scxa (- (+ ecxa pr) sr)
        scxb (- (+ ecxb pr) sr)
        scy (+ (- ecy pr) sr)]
    {:pr pr
     :pcxa pcxa :pcxb pcxb :pcy pcy
     :sr sr :scxa scxa :scxb scxb :scy scy}))


(defn eyes
  [{:keys [cx cy width height rx] :as measures}
   dev?]
  (let [ecx-offset
        (if dev?
          (/ rx 2.5)
          (/ rx (+ (rand) 2)))
        ;;        (/ rx 3)
        
        ecxa (- cx ecx-offset)
        ecxb (+ cx ecx-offset)

        ecy-offset (/ height 20)
        ecy
        (if dev?
          cy
          (rand-nth (range
                      (- cy ecy-offset)
                      (+ cy ecy-offset))))

        rx-max (- cx ecxa)
        rx-min (- rx-max (/ width 20))
        rx (if dev?
             (+ rx-min (/ (- rx-max rx-min) 8))
             (rand-nth (range rx-min rx-max 0.1)))
        
        ry (if dev?
             (/ height 9)
             (/ height (rand-nth (range 6 11 0.1))))
        

        eye-map (merge measures
                  {:ecxa ecxa :ecxb ecxb :ecy ecy :rx rx :ry ry})]
    (merge eye-map (pupils eye-map dev?))))


(defhtml draw-eyes
  [{:keys [ecxa ecxb ecy rx ry
           pr pcxa pcxb pcy
           scxa scxb scy sr]}]
  [:g.eyes
   [:ellipse {:cx ecxa :cy ecy :rx rx :ry ry}]
   [:circle.pupil {:cx pcxa :cy pcy :r pr
                   :fill "black"}]
   [:circle.shine {:cx scxa :cy scy :r sr
                   :stroke "white"}]
   
   [:ellipse {:cx ecxb :cy ecy :rx rx :ry ry}]
   [:circle.pupil {:cx pcxb :cy pcy :r pr
                   :fill "black"}]
   [:circle.shine {:cx scxb :cy scy :r sr
                   :stroke "white"}]])

(defn face
  []
  (let [cx 400
        cy 150
        width 150
        height 200]
    {:cx cx :cy cy
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
       [:h1 {:style {:user-select "none"
                     :-ms-user-select "none"
                     :-moz-user-select "none"
                     :-webkit-user-select "none"}}
        (if (:dev? data)
          "Dev mode on"
          "Dev mode off")]
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
        [:rect.dev-mode-on
         {:x 10 :y 0 :width 100 :height 50 :fill "green"
          :on-click #(om/update! data :dev? true)}]
        [:rect.dev-mode-off
         {:x 10 :y 60 :width 100 :height 50 :fill "red"
          :on-click #(om/update! data :dev? false)}]
        
        (let [{:keys [cx cy rx ry width height]} measurements]
          [:g.face {:fill "white" :stroke "black" :stroke-width 3}
           [:ellipse {:cx cx :cy cy :rx rx :ry ry
                      :stroke-width 3
                      :fill "white"
                      :stroke "black"}]
           (draw-eyes (eyes measurements (:dev? data)))])]])))


(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(figwheel/start {:build-id "dev"})

(om/root app app-state {:target (sel1 :#app)})
