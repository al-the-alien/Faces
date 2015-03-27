(ns shapes.core
  (:require
   [om.core :as om]
   [sablono.core :as html :refer-macros [html defhtml]]
   [om-tools.core :refer-macros [defcomponent]]
   [shapes.proportional :as p]))

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


(defn rand-float
  [min-x max-x]
  (rand-nth (range min-x max-x 0.1)))


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


(defn xy-on-pupil
  "Takes the radius of a circle with origin (0, 0).
  Returns a number w, where (w, w) is on the circumference of the circle."
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
                  (rand-float r-min r-max))

        pupil-c-measures {:cx 0
                          :cy 0
                          :rx (- eye-rx pupil-r)
                          :ry (- eye-ry pupil-r)}


        pupil-cx-offset (rand-float
                          (- (- eye-rx pupil-r))
                          (+ (- eye-rx pupil-r)))
        
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


        pupil-cy (cond
                   dev? eye-cy

                   (<= (:max pupil-cy-limits) (:min pupil-cy-limits))
                   (+ eye-cy (:max pupil-cy-limits))
                   

                   :else
                   (+ eye-cy (rand-float
                               (:min pupil-cy-limits)
                               (:max pupil-cy-limits))))

        highlight-r
        (if dev?
          (/ pupil-r (avg 2 6))
          (/ pupil-r (rand-nth (range 2 6 0.1))))

        highlight-offset (xy-on-pupil (- pupil-r highlight-r))
        
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
        
        eye-cy (if dev?
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
        
        eye-ry (if dev?
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




;; TODO: Nose may occasionally be too big and overlap the eyes or not leave
;;       enough room for the mouth. If this happes, refactor the nose function
;;       so nose-cy is calculated BEFORE nose-ry.
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
        
        nose-rx (if dev?
                  (avg max-rx min-rx)
                  (rand-nth (range min-rx max-rx 0.1)))

        
        
        max-ry nose-rx
        min-ry (/ head-ry 20)

        nose-ry (cond
                  :dev? (avg min-ry max-ry)
                  (< max-ry min-ry) max-ry
                  :else (rand-nth (range min-ry max-ry 0.1)))
        

        min-cy (+ horizontal-b (* 1.5 nose-ry))
        below-b (- (+ head-cy head-ry) horizontal-b)
        max-cy (- (+ head-cy head-ry) (/ below-b 2) nose-ry)
        
        nose-cy (cond
                  dev? (avg min-cy max-cy)
                  (< max-cy min-cy) max-cy
                  :else (rand-nth (range min-cy max-cy 0.1)))

        
        min-bridge nose-rx
        max-bridge (+ nose-rx (/ nose-rx 1.5))

        clip-bridge (if dev?
                      (avg min-bridge max-bridge)
                      (rand-nth (range min-bridge max-bridge 0.05)))

        clip-width (* 4 nose-rx)
        clip-height (* 4 nose-ry)

        clip-x-a (-
                   (- head-cx (/ clip-bridge 2))
                   clip-width)
        clip-x-b (+ head-cx (/ clip-bridge 2))
        clip-y-ab (- nose-cy (/ clip-height 2))
        
        clip-x-c (- nose-cx (* 2 nose-rx))
        clip-y-c (- (inc nose-cy)
                        (y-on-ellipse (+ nose-cx (/ clip-bridge 2))
                        nose-cx nose-rx nose-ry))

        shadow-clip-y (inc clip-y-c)]
    (merge measures
      {:nose-cx nose-cx :nose-cy nose-cy :nose-rx nose-rx :nose-ry nose-ry
       :nose-clip-xa clip-x-a :nose-clip-xb clip-x-b :nose-clip-yab clip-y-ab
       :nose-clip-xc clip-x-c :nose-clip-yc clip-y-c
       :nose-clip-width clip-width :nose-clip-height clip-height
       :nose-shadow-clip-y shadow-clip-y
       :a-to-b a-to-b

       ;; Add 6 to account for the nose shadow
       :horizontal-c (+ nose-cy nose-ry 6)})))


(defhtml draw-nose
  [{:keys [nose-cx nose-cy nose-rx nose-ry
           nose-clip-xa nose-clip-xb nose-clip-yab
           nose-clip-xc nose-clip-yc
           nose-clip-width nose-clip-height
           nose-shadow-clip-y]}]
  [:g.nose
   [:defs
    [:clippath#nose-bridge
     [:rect {:x nose-clip-xa :y nose-clip-yab
             :width nose-clip-width :height nose-clip-height}]
     [:rect {:x nose-clip-xb :y nose-clip-yab
             :width nose-clip-width :height nose-clip-height}]
     [:rect {:x nose-clip-xc :y nose-clip-yc
             :width nose-clip-width :height nose-clip-height}]]
    [:clippath#nose-shadow
     [:rect {:x nose-clip-xc :y nose-shadow-clip-y
             :width nose-clip-width :height (* 3 nose-clip-height)}]]]
   [:ellipse.shadow {:cx nose-cx :cy (+ nose-cy 6) :rx nose-rx :ry nose-ry
                     :fill "grey"
                     :stroke "transparent"
                     :style {:clip-path "url(#nose-shadow)"}}]
   [:ellipse.shadow {:cx nose-cx :cy (+ nose-cy 4) :rx nose-rx :ry nose-ry
                     :fill "darkgrey"
                     :stroke "transparent"
                     :style {:clip-path "url(#nose-shadow)"}}]
   [:ellipse.shadow {:cx nose-cx :cy (+ nose-cy 2) :rx nose-rx :ry nose-ry
                     :fill "lightgrey"
                     :stroke "transparent"
                     :style {:clip-path "url(#nose-shadow)"}}]
   [:ellipse {:cx nose-cx :cy nose-cy :rx nose-rx :ry nose-ry
              :fill "white" :stroke "transparent"
              :style {:clip-path "url(#nose-bridge)"}}]])


(defn mouth
  [{:keys [head-height head-width head-cx head-cy head-rx head-ry
           eye-cxa eye-cxb eye-cy eye-ry
           nose-cy
           horizontal-c a-to-b
           vertical-a] :as measures}
   dev?]
  (let [mouth-cx head-cx ;; TODO: have other cxs for off-center mouths

        below-c (- (+ head-cy head-ry) horizontal-c)

        min-ry (- head-ry (* 5 (/ below-c 6)))        
        max-ry (- head-ry (/ below-c 4))        
        mouth-ry min-ry

        min-cy (- (+ head-cy head-ry) mouth-ry (* 3 (/ below-c 4)))
        max-cy (- (+ head-cy head-ry) mouth-ry (/ below-c 4))
        mouth-cy (if dev?
                   (avg min-cy max-cy)
                   (rand-nth (range min-cy max-cy 0.1)))


        max-rx (* 1.5 a-to-b)
        min-rx a-to-b
        mouth-rx (if dev?
                   (avg min-rx max-rx)
                   (rand-nth (range min-rx max-rx 0.1)))


        min-clip-y (max (inc horizontal-c) (+ mouth-cy (/ mouth-ry 2)))
        max-clip-y (max (inc horizontal-c) (+ mouth-cy (* 9 (/ mouth-ry 10))))
        
        mouth-clip-y (cond
                       dev? (avg min-clip-y max-clip-y)
                       (= min-clip-y max-clip-y) max-clip-y
                       :else (rand-nth (range min-clip-y max-clip-y 0.1)))

        
        max-x-off (- (x-on-ellipse (+ mouth-cy mouth-ry) head-cy
                       head-rx head-ry)
                    (/ a-to-b 6))
        min-x-off (/ a-to-b 6)
        clip-x-off (cond
                     dev? (avg min-x-off max-x-off)
                     (< max-x-off min-x-off) max-x-off
                     :else (rand-nth (range min-x-off max-x-off 0.1)))
        

        
        mouth-clip-x (- head-cx clip-x-off)
        mouth-clip-width (* 2 clip-x-off)
        
        mouth-clip-height head-ry]
    (merge measures
      {:mouth-cx mouth-cx
       :mouth-cy mouth-cy
       :mouth-rx mouth-rx
       :mouth-ry mouth-ry
       :mouth-clip-x mouth-clip-x
       :mouth-clip-y mouth-clip-y
       :mouth-clip-width mouth-clip-width
       :mouth-clip-height mouth-clip-height
       :below-c below-c})))

(defhtml draw-mouth
  [{:keys [head-cx head-cy head-ry head-rx
           mouth-cx mouth-cy mouth-rx mouth-ry
           mouth-clip-x mouth-clip-y mouth-clip-width mouth-clip-height
           horizontal-c test-height below-c] :as measures}]
  [:g.mouth
   [:defs
    [:clippath#mouth-clip
     [:rect {:x mouth-clip-x :y mouth-clip-y
             :width mouth-clip-width :height mouth-clip-height}]]]
   [:ellipse.mouth {:cx mouth-cx :cy mouth-cy :rx mouth-rx :ry mouth-ry
                    :fill "transparent"
                    :style {:clip-path "url(#mouth-clip)"}}]
   #_(let [x-offset (x-on-ellipse (+ mouth-cy mouth-ry) head-cy head-rx head-ry)]
           [:g#points
            [:circle {:cx mouth-cx
                      :cy (+ mouth-cy mouth-ry)
                      :r 5 :fill "red"}]])])



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
     :height (if dev?
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
      (nose dev?)
      (mouth dev?))))


(defhtml draw-face
  [{:keys [head-cx head-cy head-rx head-ry
           head-width head-height] :as measures}]
  [:g.face {:fill "white" :stroke "grey" :stroke-width 3}
     [:ellipse {:cx head-cx :cy head-cy :rx head-rx :ry head-ry
                :stroke-width 3
                :stroke "grey"
                :fill "white"}]
     (draw-eyes measures)
     (draw-nose measures)
     (draw-mouth measures)])
