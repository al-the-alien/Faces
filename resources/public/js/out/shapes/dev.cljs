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



(defhtml draw-lil
  [owner {:keys [stroke shape-data]}]
  [:g {:stroke stroke}
   [:defs
    (for [{:keys [id]} shape-data]
     [:clippath :id (name id)
      (for [{:keys [draw-fn] :as clip-shape} shape-data
            :let [id2 (:id clip-shape)]
            :when (not= id id2)]
        (draw-fn owner clip-shape))])]
   (for [{:keys [id draw-fn] :as shape} shape-data]
     (draw-fn owner shape))])


(defn lilify
  [owner {:keys [x y width height] :as shape1} shape2]
  (let [xs [x (+ x width)]
        ys [y (+ y height)]
        new-shape2 (assoc shape2
                     :x (rand-nth xs)
                     :y (rand-nth ys))
        new-id (gensym "lil")
        lil-shape #(-> %
                     (assoc :clip-id (name (:id %)))
                     (dissoc :stroke))]
    (om/update-state! owner :shapes #(dissoc %
                                       (:id shape1) (:id shape2)))
    (om/set-state! owner [:lils new-id :shape-data]
      [(lil-shape shape1)
       (lil-shape shape2)])))


(defn combine
  [owner shape1 shape2]
  (cond
    (every? nil? (map :lil [shape1 shape2])) (lilify owner shape1 shape2)))


(defhtml draw-rect
  [owner {:keys [id x y width height stroke clip-id] :as shape}]
  [:rect {:x (- x (/ width 2))
          :y (- y (/ height 2))
          :width width
          :height height
          :stroke-width 3
          :stroke stroke
          :fill "white"
          :on-click
          (fn [_]
            (println "Hello" id "!")
            (if-let [selected (om/get-state owner :selected)]
              (combine owner (om/get-state owner [:shapes selected]) shape)
              (om/set-state! owner :selected id)))

          :clip-path (when clip-id
                       (str "url(#" clip-id ")"))}])


(defn rect
  [x y]
  (let [width (rand-nth (range 50 100))
        height (rand-nth (range 50 100))]
    {:id (gensym "rect")
     :x x
     :y y
     :width width 
     :height height
     :stroke "black"
     :draw-fn draw-rect}))


;; This function assumes the square is 100x100
(defn square
  [x y]
  (let [width 100
        height 100]
    {:id (gensym "square")
     :x (- x (/ width 2))
     :y (- y (/ height 2))
     :width width 
     :height height
     :draw-fn draw-rect}))


(defcomponent app
  [data owner]
  (init-state [_]
    {:shapes {}
     :lils {}
     :selected nil})
  (render-state [_ {:keys [selected shapes lils]}]
    (html
      [:svg {:version 1.1
             :baseProfile "full"
             :width js/window.innerWidth
             :height js/window.innerHeight
             :xmlns "http://www.w3.org/2000/svg"}
       [:rect.background
        {:width "100%" :height "100%"
         :fill "white"
         :on-click (fn [e]
                     (let [new-rect (rect (.-clientX e) (.-clientY e))]
                       (om/set-state! owner :selected nil)
                       (om/set-state! owner
                         [:shapes (:id new-rect)]
                         new-rect)))}]
       
       (for [[id {:keys [draw-fn] :as shape}] shapes]
         (do
           (if (= id selected)
             (om/set-state! owner [:shapes id :stroke] "blue")
             (om/set-state! owner [:shapes id :stroke] "black"))
           (draw-fn owner shape)))

       (for [[id lil] lils]
         (do
           (if (= id selected)
             (om/set-state! owner [:lils id :stroke] "blue")
             (om/set-state! owner [:lils id :stroke] "black"))
           (println (keys lil))
           (draw-lil owner lil)))])))

(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(figwheel/start {:build-id "dev"})

(om/root app app-state {:target (sel1 :#app)})
