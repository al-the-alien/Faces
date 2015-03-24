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
  [{:keys [x y width height cxa cxb cxy rx ry cy]}]
  (let [pr #_(/ (/ (+ rx ry) 2) (rand-nth (range 2 8)))
        (/ (/ (+ rx ry) 2) 3)
        
        pcxa cxa
        pcxb cxb
        pcy cy

        sr (/ pr 4)
        scxa (- (+ cxa pr) sr)
        scxb (- (+ cxb pr) sr)
        scy (+ (- cy pr) sr)]
    {:pr pr
     :pcxa pcxa :pcxb pcxb :pcy pcy
     :sr sr :scxa scxa :scxb scxb :scy scy}))


(defn eyes
  [{:keys [x y width height rx]}]
  (let [cx-offset
;;        (/ rx (+ (rand) 2))
        (/ rx 2.5)
        ;;        (/ rx 3)
        
        cxa (- x cx-offset)
        cxb (+ x cx-offset)

        cy-offset (/ height 20)
        cy #_(rand-nth (range
                      (- y cy-offset)
                      (+ y cy-offset)))
        y

        rx-max (- x cxa)
        rx-min (- rx-max (/ width 20))
        rx  ;; (rand-nth (range rx-min rx-max 0.1))
                (+ rx-min (/ (- rx-max rx-min) 8))
        ry ;;(/ height (rand-nth (range 6 11 0.1)))
        (/ height 9)

        prx (/ rx 4)
        pry (/ rx 4)

        srx (/ prx 4)
        sry srx
        scxa (- (+ cxa prx) srx)
        scxb (- (+ cxb prx) srx)
        scy (+ (- cy pry) sry)

        eye-map {:cxa cxa :cxb cxb :cy cy :rx rx :ry ry                 
                 :scxa scxa :scxb scxb :scy scy
                 :srx srx :sry sry}]
    (merge eye-map (pupils eye-map))))


(defhtml draw-eyes
  [{:keys [cxa cxb cy rx ry
           pr pcxa pcxb pcy
           scxa scxb scy sr]}]
  [:g.eyes
   [:ellipse {:cx cxa :cy cy :rx rx :ry ry}]
   [:circle.pupil {:cx pcxa :cy pcy :r pr
              :fill "black"}]
   [:circle.shine {:cx scxa :cy scy :r sr
                    :stroke "white"}]
   
   [:ellipse {:cx cxb :cy cy :rx rx :ry ry}]
   [:circle.pupil {:cx pcxb :cy pcy :r pr
              :fill "black"}]
   [:circle.shine {:cx scxb :cy scy :r sr
                    :stroke "white"}]])

(defn face
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
           (draw-eyes (eyes measurements))])]])))



(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(figwheel/start {:build-id "dev"})

(om/root app app-state {:target (sel1 :#app)})
