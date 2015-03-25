(ns shapes.dev
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html defhtml]]
            [om-tools.core :refer-macros [defcomponent]]
            [dommy.core :refer-macros [sel1]]
            [weasel.repl :as repl]
            [figwheel.client :as figwheel]
            [shapes.proportional :as p])
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
  (println {:x x :a a :b b :h h :k k})
  (let [max-offset (+ k
                     (sqrt (* (square b)
                             (- 1 (/ (square (- x h)) (square a))))))]
    {:min (- max-offset)
     :max max-offset}))


(defonce app-state (atom {:text "Hello, development!"}))



(defn pupils
  [{:keys [eye-cxa eye-cxb eye-cy eye-rx eye-ry eye-cy] :as measures}
   dev?]
  (let [r-max (min
                (min eye-rx eye-ry)
                (- (max eye-rx eye-ry) (/ (max eye-rx eye-ry) 3)))
        r-min 5
        pupil-r (if dev?
                  (/ (+ r-min r-max) 2)
                  (rand-nth (range r-min r-max 0.1)))

        pupil-c-measures {:cx 0
                          :cy 0
                          :rx (- eye-rx pupil-r)
                          :ry (- eye-ry pupil-r)}

        

        
        pupil-cx-offset (rand-nth (range
                                    (- (- eye-rx pupil-r))
                                    (+ (- eye-rx pupil-r))
                                    0.1))
        
        
        
        
        pupil-cxa (if dev?
            eye-cxa
            (+ eye-cxa pupil-cx-offset))

        
        pupil-cxb (if dev?
                    eye-cxb
                    (+ eye-cxb pupil-cx-offset))



        pupil-cy-limits (ys-within-ellipse
                          pupil-cx-offset
                          (:rx pupil-c-measures)
                          (:ry pupil-c-measures)
                          (:cx pupil-c-measures)
                          (:cy pupil-c-measures))


        ;; FIXME: pupils occasionally extend past the edges of the eye.
        
        ;; FIXME: ys-within-ellipse occasionally returns {:min 0 :max 0}.
        ;;        This may be a floating point error.
        ;;        At the moment I'm just working the acception this causes
        ;;        when (range 0 0) is called by just passing 0, but, as I'm
        ;;        working with random values, this hack weights 0 much more than
        ;;        I would like. Figure out a better way to work around the
        ;;        floating point error.
        pupil-cy (cond
                   dev? eye-cy
                   
                   (and
                     (zero? (:min pupil-cy-limits))
                     (zero? (:min pupil-cy-limits)))
                   (do (println "Got 0 0: "
                         "original args:" measures
                         "passed to pupil-cy-limits: " pupil-cx-offset
                         pupil-c-measures))
                   

                   :else
                   (+ eye-cy (rand-nth
                               (range
                                 (:min pupil-cy-limits)
                                 (:max pupil-cy-limits)
                                 0.1))))


        highlight-r (if dev?
             (/ pupil-r 3.75)
             (/ pupil-r (rand-nth (range 3 5 0.1))))
;;        _ (println "highlight-r" highlight-r)
        
        highlight-cxa (- (+ pupil-cxa pupil-r) (* 2 highlight-r))
        
;;        _ (println "highlight-cxa" highlight-cxa)
        
        highlight-cxb (- (+ pupil-cxb pupil-r) (* 2 highlight-r))

;;        _ (println "highlight-cxb" highlight-cxb)
        
        highlight-cy (+ (- pupil-cy pupil-r) (* 2 highlight-r))
        
;;        _ (println "highlight-cy" highlight-cy)
        ]
    
    {:pupil-r pupil-r
     :pupil-cxa pupil-cxa :pupil-cxb pupil-cxb :pupil-cy pupil-cy
     :highlight-r highlight-r :highlight-cxa highlight-cxa :highlight-cxb highlight-cxb :highlight-cy highlight-cy}))


(defn eyes
  [{:keys [head-cx head-cy head-width head-height head-rx head-ry] :as measures}
   dev?]
  (let [eye-cx-offset
        (if dev?
          (/ head-rx 2.5)
;;          (/ head-rx (rand-nth (range 1.8 4 0.1)))  
          (/ head-rx (rand-nth (range 1.8 4 0.1))))
        
        eye-cxa (- head-cx eye-cx-offset)
        eye-cxb (+ head-cx eye-cx-offset)

        eye-cy-offset (/ head-height 10)
        eye-cy
        (if dev?
          head-cy          
          #_(rand-nth (range
                      (- head-cy eye-cy-offset)
                      (+ head-cy eye-cy-offset)
                      0.1))
          (rand-nth (range
                      (- head-cy eye-cy-offset)
                      (+ head-cy eye-cy-offset)
                      0.1)))

        rx-max (- head-cx eye-cxa)
        rx-min (/ head-width 15)
        eye-rx (if dev?
                 (+ rx-min (/ (- rx-max rx-min) 8))
                 ;; (rand-nth (range rx-min rx-max 0.1))
                 (rand-nth (range rx-min rx-max 0.1)))

        eye-to-chin (- (+ head-cy head-ry) eye-cy)

        ry-max (- eye-to-chin (/ head-height 6))
        ry-min (/ head-height 20)
        eye-ry (if dev?
                 ;; (/ head-height 9)
                 (rand-nth (range ry-min ry-max 0.1))
                 (rand-nth (range ry-min ry-max 0.1))
                 )
        

        eye-map (merge measures
                  {:eye-cxa eye-cxa :eye-cxb eye-cxb :eye-cy eye-cy
                   :eye-rx eye-rx :eye-ry eye-ry})]
    (merge eye-map (pupils eye-map dev?))))


(defhtml draw-eyes
  [{:keys [eye-cxa eye-cxb eye-cy eye-rx eye-ry
           pupil-r pupil-cxa pupil-cxb pupil-cy
           highlight-cxa highlight-cxb highlight-cy highlight-r]}]
  [:g.eyes
   [:ellipse.eye {:cx eye-cxa :cy eye-cy
                  :rx eye-rx :ry eye-ry
                  :stroke-width 2}]
   [:circle.pupil {:cx  pupil-cxa
                   :cy  pupil-cy
                   :r  pupil-r
                   :stroke "transparent"
                   :fill "black"}]
   #_[:circle.shine {:cx highlight-cxa
                   :cy highlight-cy
                   :r highlight-r
                   :stroke "transparent"}]

   
   
   [:ellipse.eye {:cx eye-cxb :cy eye-cy
                  :rx eye-rx :ry eye-ry
                  :stroke-width 2}]
   [:circle.pupil {:cx pupil-cxb
                   :cy pupil-cy
                   :r pupil-r
                   :stroke "transparent"
                   :stroke-alpha "0.5"
                   :fill "black"}]
   #_[:circle.shine {:cx highlight-cxb
                   :cy highlight-cy
                   :r highlight-r
                   :stroke "transparent"}]])


(defn nose
  [{:keys [head-cx head-cy eye-cxa eye-cxb eye-cy] :as measures} dev?]
  (let [nose-x head-cx]
    (merge measures
      )))


(defn head
  [{:keys [cx cy width height]} dev?]
  {:head-cx cx
   :head-cy cy
   :head-width width
   :head-height height
   :head-rx (/ width 2)
   :head-ry (/ height 2)})


(defn basic-measurements
  [dev?]
  {:cx 400
   :cy 150
   :width (if dev?
             150
            (rand-nth (range 100 225 0.1)))
   :height (if dev?
             200
             (rand-nth (range 150 250 0.1)))})

(defn face
  [dev? & {:keys [proportional?]}]
  (if proportional?
    (-> (p/basic-measurements dev?)
      (p/head dev?)
      (p/eyes dev?)
      (p/nose dev?))
    (-> (basic-measurements dev?)
      (head dev?)
      (eyes dev?)
      (nose dev?))))


(defcomponent app
  [data owner]
  (init-state [_]
    {:measurements (face (:dev? data)) :proportional? false})
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
                           (face (:dev? @data) :proportional? false)))}]
        [:rect.dev-mode-off
         {:x 10 :y 60 :width 100 :height 50 :fill "red"
          :on-click #(om/update! data :dev? false)}]
        
        (let [{:keys [head-cx head-cy head-rx head-ry
                      head-width head-height]} measurements]
          [:g.face {:fill "white" :stroke "black" :stroke-width 3}
           [:ellipse {:cx head-cx :cy head-cy :rx head-rx :ry head-ry
                      :stroke-width 3
                      :fill "white"
                      :stroke "black"}]
           (draw-eyes (eyes measurements (:dev? data)))])]])))


(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(figwheel/start {:build-id "dev"})

(om/root app app-state {:target (sel1 :#app)})
