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


(defn square
  [x]
  (* x x))

(defn sqrt
  [x]
  (Math.sqrt x))


(defn ys-within-ellipse
  [x a b h k] ; a = rx ; b = ry ; h = cx ; k = cy
  (let [max-offset (+ k
                     (sqrt (* (square b)
                             (- 1 (/ (square (- x h)) (square a))))))]
    {:min (- max-offset)
     :max max-offset}))


(defonce app-state (atom {:text "Hello, development!"}))



(defn pupils
  [{:keys [x y width height ecxa ecxb ecy erx ery ecy]}
   dev?]
  (let [pr (if dev?
             (/ (/ (+ erx ery) 2) 3)
             (/ (/ (+ erx ery) 2) (rand-nth (range 2 5 0.1))))

        pc-measures {:cx 0
                     :cy 0
                     :rx (- erx pr)
                     :ry (- ery pr)}
        
        pcx-offset (rand-nth (range
                               (- (- erx pr))
                               (+ (- erx pr))
                               0.1))
        pcxa (if dev?
               ecxa
               (+ ecxa pcx-offset))
        
        pcxb (if dev?
               ecxb
               (+ ecxb pcx-offset))


        pcy-offset (rand-nth (range
                               (- (- ery pr))
                               (+ (- ery pr))
                               0.1))
        pcy-limits (ys-within-ellipse
                     pcx-offset
                     (:rx pc-measures)
                     (:ry pc-measures)
                     (:cx pc-measures)
                     (:cy pc-measures))
        pcy (if dev?
              ecy
              (+ ecy (rand-nth
                       (range (:min pcy-limits) (:max pcy-limits 0.1)))))

        sr (if dev?
             (/ pr 3.75)
             (/ pr (rand-nth (range 3 5 0.1))))
        scxa (- (+ pcxa pr) (* 2 sr))
        scxb (- (+ pcxb pr) (* 2 sr))
        scy (+ (- pcy pr) (* 2 sr))]
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
        erx (if dev?
             (+ rx-min (/ (- rx-max rx-min) 8))
             (rand-nth (range rx-min rx-max 0.1)))
        
        ery (if dev?
             (/ height 9)
             (/ height (rand-nth (range 6 11 0.1))))
        

        eye-map (merge measures
                  {:ecxa ecxa :ecxb ecxb :ecy ecy :erx erx :ery ery})]
    (merge eye-map (pupils eye-map dev?))))


(defhtml draw-eyes
  [{:keys [ecxa ecxb ecy erx ery
           pr pcxa pcxb pcy
           scxa scxb scy sr]}]
  [:g.eyes
   [:ellipse.eye-background {:cx ecxa :cy ecy :rx erx :ry ery
                             :stroke-width 2}]
   [:circle.pupil {:cx pcxa :cy pcy :r pr
                   :stroke "transparent"
                   :fill "black"}]
   [:circle.shine {:cx scxa :cy scy :r sr
                   :stroke "transparent"}]

   
   
   [:ellipse.eye-background {:cx ecxb :cy ecy :rx erx :ry ery
                             :stroke-width 2}]
   [:circle.pupil {:cx pcxb :cy pcy :r pr
                   :stroke "transparent"
                   :fill "black"}]
   [:circle.shine {:cx scxb :cy scy :r sr
                   :stroke "transparent"}]])



(defn face
  [dev?]
  (let [cx 400
        cy 150
        width (if dev?
                150
                (rand-nth (range 100 200 0.1)))
        height (if dev?
                 200
                 (rand-nth (range 150 200 0.1)))]
    {:cx cx :cy cy
     :width width
     :height height
     :rx (/ width 2)
     :ry (/ height 2)}))


(defcomponent app
  [data owner]
  (init-state [_]
    {:measurements (face (:dev? data))})
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
                      (om/set-state! owner :measurements
                        (face (:dev? @data))))}]
        [:rect.dev-mode-on
         {:x 10 :y 0 :width 100 :height 50 :fill "green"
          :on-click #(do (om/update! data :dev? true)
                         (om/set-state! owner :measurements
                           (face (:dev? @data))))}]
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
