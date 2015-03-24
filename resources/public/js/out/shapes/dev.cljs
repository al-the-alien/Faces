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
  (let [cy (- y (/ height (rand-nth (range 4 8))))
        x-offset (/ width (rand-nth (range 3 6)))
        cx-a (- x x-offset)
        cx-b (+ x x-offset)
        rx (/ width (rand-nth (range 4 6)))
        ry (/ height (rand-nth (range 2 6)))
        prx (/ rx (rand-nth (range 1.5 8)))
        pry (/ ry (rand-nth (range 2 8)))
        pcx-offset (rand-nth (range (- prx rx) (- rx prx)))
        pcxa (+ cx-a pcx-offset)
        pcxb (+ cx-b pcx-offset)
        pcy (rand-nth (range (+ (- cy ry) pry) (- (+ cy ry) pry)))]
    {:cx-a cx-a :cx-b cx-b :cy cy :rx rx :ry ry
     :pcxa pcxa :pcxb pcxb :pcy pcy :prx prx :pry pry}))


(defhtml draw-eyes
  [{:keys [cy cx-a cx-b rx ry prx pry pcxa pcxb pcy]}]
  [:g.eyes {:stroke "black" :stroke-width 3}
   [:defs
    [:clippath#pupil-a
     [:ellipse {:cx cx-a :cy cy
                :rx rx :ry ry}]]
    [:clippath#pupil-b
     [:ellipse {:cx cx-b :cy cy
              :rx rx :ry ry}]]]
   [:ellipse {:cx cx-a :cy cy
               :rx rx :ry ry :fill "white"}]
   [:ellipse.pupil {:cx pcxa :cy pcy :rx prx :ry pry
                    :fill "black"
                    :clip-path "url(#pupil-a)"}]
   [:ellipse {:cx cx-b :cy cy
              :rx rx :ry ry :fill "white"}]
   [:ellipse.pupil {:cx pcxb :cy pcy :rx prx :ry pry
                    :fill "black"
                    :clip-path "url(#pupil-b)"}]])

(defn combine
  [owner {:keys [x y width height] :as a} b]
  (om/update-state! owner :shapes #(dissoc % (:id a) (:id b)))
  )


(defn shape
  [owner x y]
  (let [id (gensym "shape")]
    {:id id     
     :x x :y y
     :width (rand-nth (range 100 200))
     :height (rand-nth (range 100 200))
     :on-click (fn [_]
                 (println "selected: " id)
                 (om/set-state! owner :selected id))}))


(defhtml draw-shape
  [{:keys [x y width height stroke on-click]}]
  [:rect {:x (- x (/ width 2))
          :y (- y (/ height 2))
          :width width
          :height height
          :stroke-width 5
          :stroke (or stroke "black")
          :fill "white"
          :on-click on-click}])


(defcomponent app
  [data owner]
  (init-state [_]
    {:selected nil
     :shapes {}
     :lils {}})
  (render-state [_ {:keys [selected shapes lils]}]
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
                      (let [new-shape (shape owner (.-clientX e) (.-clientY e))]
                        (om/set-state! owner
                          [:shapes (:id new-shape)]
                          new-shape)))}]
        [:ellipse {:cx 400 :cy 200 :rx 75 :ry 100
                   :stroke "black" :fill "white"}]
        (draw-eyes (eyes {:x 400 :y 200 :width 150 :height 200}))]])))



(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(figwheel/start {:build-id "dev"})

(om/root app app-state {:target (sel1 :#app)})
