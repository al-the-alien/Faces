(ns shapes.dev
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html defhtml]]
            [om-tools.core :refer-macros [defcomponent]]
            [dommy.core :refer-macros [sel1]]
            [weasel.repl :as repl]
            [figwheel.client :as figwheel]
            [shapes.proportional :as p])
  (:refer-clojure :exclude [println]))


(def color-scale
  ["white" "lightgrey" "darkgrey" "grey" "dimgrey" "black"])

(defn println
  [& content]
  (js/console.log (apply pr-str content)))


(defn square
  [x]
  (* x x))

(defn sqrt
  [x]
  (Math.sqrt x))

(defn abs
  [x]
  (Math.abs x))

(defn avg
  [& xs]
  (/ (reduce + xs) (count xs)))


(defn x-on-ellipse
  [y cy a b] ;; a = rx ; b = ry
  ;; The function acts on a normalized ellipse, but is passed a non-normalized
  ;; y. To account for that, y is subtracted from cy.
  (* a (sqrt (abs (- 1 (square (/ (- cy y) b)))))))

(defn y-on-ellipse
  [x cx a b] ;; a = rx ; b = ry
  ;; The function acts on a normalized ellipse, but is passed a non-normalized
  ;; x. To account for that, x is subtracted from cx.
  (* b (sqrt (abs (- 1 (square (/ (- cx x) a)))))))

(defn ys-within-ellipse
  [x cx a b] ;; a = rx ; b = ry
  (let [max-y (y-on-ellipse x cx a b)]
    {:min (- max-y)
     :max max-y}))


(defn xy-on-circle
  [pupil-r]
  (sqrt
    (/ (square pupil-r) 2)))


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
                          0
                          (:rx pupil-c-measures)
                          (:ry pupil-c-measures))


        ;; FIXME: pupils occasionally extend past the edges of the eye.
        pupil-cy (cond
                   dev? eye-cy
                   
                   (and
                     (zero? (:min pupil-cy-limits))
                     (zero? (:min pupil-cy-limits)))
                   eye-cy
                   

                   :else
                   (+ eye-cy (rand-nth
                               (range
                                 (:min pupil-cy-limits)
                                 (:max pupil-cy-limits)
                                 0.1))))


        highlight-r
        (if dev?
          (/ pupil-r (avg 2 6))
          (/ pupil-r (rand-nth (range 2 6 0.1))))

        highlight-offset (xy-on-circle (- pupil-r highlight-r))
        
        highlight-cxa (+ pupil-cxa highlight-offset)
        
        highlight-cxb (+ pupil-cxb highlight-offset)

        highlight-cy (- pupil-cy highlight-offset)]
    
    {:pupil-r pupil-r
     :pupil-cxa pupil-cxa :pupil-cxb pupil-cxb :pupil-cy pupil-cy
     :highlight-r highlight-r :highlight-cxa highlight-cxa :highlight-cxb highlight-cxb :highlight-cy highlight-cy}))


(defn eyes
  [{:keys [head-cx head-cy head-width head-height head-rx head-ry] :as measures}
   dev?]
  (let [max-cx-off (* (/ head-rx 3) 2)
        min-cx-off (/ head-rx 6)
        eye-cx-offset (if dev?
                        (avg max-cx-off min-cx-off)
                        (rand-nth (range min-cx-off max-cx-off 0.1)))
        
        eye-cxa (- head-cx eye-cx-offset)
        eye-cxb (+ head-cx eye-cx-offset)


        ;; After looking through many faces, (* 0.4 head-ry) seemed to be the
        ;; best min-cy.
        min-cy (- head-cy (* 0.4 head-ry))
        
        max-cy (+ head-cy (/ head-height 6))
        
        ;; HERE
        eye-cy max-cy #_(if dev?
                 (avg min-cy max-cy)
                 (rand-nth (range min-cy max-cy 0.1)))

        x-intersect (- head-cx (x-on-ellipse eye-cy head-cy head-rx head-ry))
        x-intersect-off (- eye-cxa x-intersect)

        rx-max (min
                 (- head-cx eye-cxa)
                 (+ x-intersect-off (/ x-intersect-off 4)))
        rx-min (/ head-width 15)
        eye-rx (if dev?
            (avg rx-max rx-min)
            (rand-nth (range rx-min rx-max 0.1)))
        
        

        horizontal-a eye-cy
        head-top (- head-cy head-ry)
        head-bottom (+ head-cy head-ry)
        above-a (- eye-cy head-top)
        below-a (- head-bottom eye-cy)
        y-max (+ horizontal-a (/ below-a 2))

        ry-max (- y-max eye-cy)
        ry-min (/ head-height 20)
        ;; HERE
        eye-ry ry-max
        #_(if dev?
            (avg ry-max ry-min)
            (rand-nth (range ry-min ry-max 0.1)))
        

        eye-map (merge measures
                  {:eye-cxa eye-cxa :eye-cxb eye-cxb :eye-cy eye-cy
                   :eye-rx eye-rx :eye-ry eye-ry
                   :horizontal-a horizontal-a
                   :horizontal-b (+ eye-cy eye-ry)
                   :vertical-a eye-cxa :vertical-b eye-cxb})]
    (merge eye-map (pupils eye-map dev?))))


(defhtml draw-eyes
  [{:keys [eye-cxa eye-cxb eye-cy eye-rx eye-ry
           pupil-r pupil-cxa pupil-cxb pupil-cy
           highlight-cxa highlight-cxb highlight-cy highlight-r]}]
  [:g.eyes
   [:defs
    [:clippath#eye-a
     [:ellipse {:cx eye-cxa :cy eye-cy
                :rx eye-rx :ry eye-ry}]]
    [:clippath#eye-b
     [:ellipse {:cx eye-cxb :cy eye-cy
                :rx eye-rx :ry eye-ry
                :stroke-width 2}]]]
   [:ellipse.eye {:cx eye-cxa :cy eye-cy
                  :rx eye-rx :ry eye-ry
                  :stroke-width 2}]
   [:g#inner-eye-a {:style {:clip-path "url(#eye-a)"}}
    [:circle.pupil {:cx  pupil-cxa
                    :cy  pupil-cy
                    :r  pupil-r
                    :stroke "transparent"
                    :fill "black"}]
    [:circle.highlight {:cx highlight-cxa
                        :cy highlight-cy
                        :r highlight-r
                        :stroke "transparent"}]]
   
   
   [:ellipse.eye {:cx eye-cxb :cy eye-cy
                  :rx eye-rx :ry eye-ry
                  :stroke-width 2}]
   [:g#inner-eye-b {:style {:clip-path "url(#eye-b)"}}
    [:circle.pupil {:cx pupil-cxb
                    :cy pupil-cy
                    :r pupil-r
                    :stroke "transparent"
                    :stroke-alpha "0.5"
                    :fill "black"}]
    [:circle.highlight {:cx highlight-cxb
                        :cy highlight-cy
                        :r highlight-r
                        :stroke "transparent"}]]])



(defn nose
  [{:keys [head-height head-width head-cx head-cy head-rx head-ry
           eye-cxa eye-cxb eye-cy eye-rx eye-ry
           pupil-cy pupil-r
           mouth-y
           horizontal-a horizontal-b
           vertical-a vertical-b] :as measures}
   dev?]
  (let [nose-cx head-cx

        a-to-b (- vertical-b vertical-a)
        max-rx (/ a-to-b 4)
        min-rx (/ a-to-b 12)
        
        ;; HERE
        nose-rx min-rx
        #_(if dev?
            (avg max-rx min-rx)
            (rand-nth (range min-rx max-rx 0.1)))
        
        max-ry nose-rx
        min-ry (/ head-ry 20)

        nose-ry (cond
                  :dev? (avg min-ry max-ry)
                  (< max-ry min-ry) min-ry
                  :else (rand-nth (range min-ry max-ry 0.1)))
        

        min-cy (+ horizontal-b (* 1.5 nose-ry))
        below-b (- (+ head-cy head-ry) horizontal-b)
        max-cy (- (+ head-cy head-ry) (/ below-b 3) nose-ry)
        
        nose-cy (cond
                  dev? (avg min-cy max-cy)
                  (< max-cy min-cy) min-cy
                  :else (rand-nth (range min-cy max-cy 0.1)))

        nose-clip-x (- nose-cx (* 2 nose-rx))
        nose-clip-width (* 4 nose-rx)

        min-clip-y (- nose-cy (/ nose-ry 1.5))
        nose-clip-y min-clip-y ;; (+ (- nose-cy nose-ry) (/ nose-ry 2))
        nose-clip-height (+ nose-clip-y (* 3 nose-ry))]
    (merge measures
      {:nose-cx nose-cx :nose-cy nose-cy :nose-rx nose-rx :nose-ry nose-ry
       :nose-clip-x nose-clip-x :nose-clip-y nose-clip-y
       :nose-clip-width nose-clip-width :nose-clip-height nose-clip-height
       :horizontal-c (+ nose-cy nose-ry)})))


(defhtml draw-nose
  [{:keys [nose-cx nose-cy nose-rx nose-ry
           nose-clip-x nose-clip-y nose-clip-width nose-clip-height]}]
  [:g.nose
   [:defs
    [:clippath#nose-bridge
     [:rect {:x nose-clip-x :y nose-clip-y
             :width nose-clip-x :height nose-clip-y}]]]
   [:ellipse {:cx nose-cx :cy nose-cy :rx nose-rx :ry nose-ry
              :style {:clip-path "url(#nose-bridge)"}}]
   #_[:path.shadow {:d (reduce (fn [acc s]
                                 (str acc " " s))
                         ["M" nose-x1 (+ nose-y 1)
                          "C" nose-cx1 (+ nose-cy 3) nose-cx2
                          (+ nose-cy 3) nose-x2  (+ nose-y 1)])
                    :stroke "grey"
                    :fill "transparent"}]
   #_[:path.highlight
      {:d (reduce (fn [acc s]
                    (str acc " " s))
            ["M" (+ nose-x1 1) (+ nose-y 2)
             "C" (+ nose-cx1 4) (- nose-cy 3) (- nose-cx2 4) (- nose-cy 3)
             (- nose-x2 1) (+ nose-y 2)])
       :stroke "lightgrey"
       :fill "white"}]
   #_[:path {:d (reduce (fn [acc s]
                          (str acc " " s))
                  ["M" nose-x1 nose-y
                   "C" nose-cx1 nose-cy nose-cx2 nose-cy nose-x2 nose-y])
             :stroke "darkgrey"
             :fill "transparent"}]])


(defn mouth
  [{:keys [head-height head-cx head-cy head-rx head-ry
           eye-cxa eye-cxb eye-cy eye-ry
           nose-cy] :as measures}
   dev?]
  (let [mouth-cx head-cx ;; TODO: have other cxs for off-center mouths

        mouth-ry (/ head-height 20)

        
        min-cy (- (+ head-cy head-ry) (/ head-height 20) mouth-ry)
        max-cy (- head-cy head-ry)
        mouth-cy min-cy

        
        mouth-rx (- head-rx (/ head-rx 20))

        lower-face-top (+ eye-cy eye-ry)
        lower-face-bottom (+ head-cy head-ry)
        lower-face (- lower-face-top lower-face-bottom)
        
        min-ry (- head-ry mouth-cy)
        ;; (- head-ry (/ head-ry 20))
        max-ry (- head-ry (/ head-ry 4))
        
        ;;        mouth-ry min-ry
        
        mouth-clip-x eye-cxa
        mouth-clip-width (- eye-cxb eye-cxa)
        mouth-clip-y (+ mouth-cy (/ mouth-ry 2))
        mouth-clip-height head-height]
    (merge measures
      {:mouth-cx mouth-cx
       :mouth-cy mouth-cy
       :mouth-rx mouth-rx
       :mouth-ry mouth-ry
       :mouth-clip-x mouth-clip-x
       :mouth-clip-y mouth-clip-y
       :mouth-clip-width mouth-clip-width
       :mouth-clip-height mouth-clip-height})))

(defhtml draw-mouth
  [{:keys [mouth-cx mouth-cy mouth-rx mouth-ry
           mouth-clip-x mouth-clip-y mouth-clip-width mouth-clip-height]}]
  [:g.mouth
   [:defs
    [:clippath#mouth-clip
     [:rect {:x mouth-clip-x :y mouth-clip-y
             :width mouth-clip-width :height mouth-clip-height}]]]
   [:ellipse.mouth {:cx mouth-cx :cy mouth-cy :rx mouth-rx :ry mouth-ry
                    :fill "transparent"
                    :style {:clip-path "url(#mouth-clip)"}
                    }]])



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
  (let [w js/window.innerWidth
        h js/window.innerHeight
        m (min w h)
        max-dimension (max 75 (- m (/ m 5)))
        min-dimension (max 75 (/ m 2))]

    ;; Adding 50 to account for the control buttons
    {:cx (+ (/ w 2) 50)  ;; 400

     :cy (/ h 2)
     :width (if dev?
              (avg min-dimension max-dimension)
              (rand-nth (range
                          min-dimension
                          max-dimension
                          0.1)))
     ;; HERE
     :height min-dimension
     #_(if dev?
         (avg min-dimension max-dimension)
         (rand-nth (range
                     min-dimension
                     max-dimension
                     0.1)))}))

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
      (mouth dev?)
      (nose dev?))))


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


(defonce app-state (atom {:measurements (face false ; sets dev?
                                          :proportional? false)}))


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
                     (face (:dev? @data) :proportional? false)))}]
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
    {:x 0 :y 400 :width 150 :height 50 :fill "steelblue"
     :on-click #(om/transact! data :sections? not)}]
   [:text {:x (+ 25 50) :y (+ 30 400)
           :style {:pointer-events "none"}}
    "Toggle sections"]])


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
                                            (face (:dev? @data)))))}]

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
        
         
         
         (let [{:keys [head-cx head-cy head-rx head-ry
                       head-width head-height]} (:measurements data)]
           [:g.face {:fill "white" :stroke "grey" :stroke-width 3}
            [:ellipse {:cx head-cx :cy head-cy :rx head-rx :ry head-ry
                       :stroke-width 3
                       :stroke "grey"
                       :fill "white"}]
            (draw-eyes (:measurements data))
            (draw-nose (:measurements data))
            (draw-mouth (:measurements data))])

         (for [[i color] (map-indexed vector color-scale)]
           [:g.color {:text-anchor "middle"}
            [:rect {:x (* i 50) :y 335
                    :width 45 :height 30
                    :stroke "black"
                    :fill color}]
            [:text {:x (+ 25 (* i 50)) :y (+ 335 45)
                    :stroke "black"
                    :font-family "Verdana"
                    :font-size 10}
             color]])
         (when (:sections? data)
           (section-face (:measurements data)))
         

         #_(let [{:keys [head-rx head-ry head-cy head-cx eye-cy eye-cxa eye-cxb]}
               (:measurements data)
               x-offset (x-on-ellipse eye-cy head-cy head-rx head-ry)
               y-offset-a (y-on-ellipse eye-cxa head-cx head-rx head-ry)
               y-offset-b (y-on-ellipse eye-cxb head-cx head-rx head-ry)]
           [:g#points
            [:circle {:cx (+ head-cx x-offset)
                     :cy eye-cy
                      :r 5 :fill "red"}]
            [:circle {:cx eye-cxa
                     :cy (- head-cy y-offset-a)
                      :r 5 :fill "blue"}]
            [:circle {:cx eye-cxb
                     :cy (- head-cy y-offset-b)
                     :r 5 :fill "purple"}]])]]])))



(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(figwheel/start {:build-id "dev"})

(om/root app app-state {:target (sel1 :#app)})

(defonce bezier-nose-mouth-overlap
  {:measurements {:mouth-cx2 497.5438596491228, :nose-cy 361.4, :nose-y 324.995, :highlight-cxb 530.3980681015346, :eye-cxb 519.5657894736842, :head-ry 182.05, :eye-cy 169.49, :mouth-cy 360.23999999999995, :pupil-r 5.2, :nose-x1 467.1475, :head-cx 483.5, :mouth-x1 459.4561403508772, :pupil-cy 204.69566325039642, :highlight-cxa 458.2664891541661, :mouth-x2 507.5438596491228, :nose-x2 499.8525, :highlight-r 2.3636363636363633, :head-cy 204.6, :head-height 364.1, :eye-cxa 447.4342105263158, :nose-cx2 531.405, :eye-rx 22.273333333333333, :pupil-cxb 528.3924561403509, :nose-cx1 435.59499999999997, :pupil-cxa 456.26087719298243, :highlight-cy 202.69005128921276, :head-width 274.1, :mouth-cx1 469.4561403508772, :head-rx 137.05, :mouth-y 350.23999999999995, :eye-ry 63.605000000000004}, :paused? true})
