(ns main
  (:require [reagent.dom :as dom]
            [reagent.core :as r]
            [cljs.core.async :refer (chan put! <! go go-loop timeout)]))

(def itemAdd (r/atom ""))
(def event-queue (chan))
(def valueAdd (r/atom ()))
(def counter (r/atom 0))
(go-loop [event (<! event-queue)]
(case event
  :inc (swap! counter inc)
  :dec (swap! counter dec))
  (recur (<! event-queue)))


(defn input-box  [type label var]
  [:div.input-box
   [:input 
    {:on-change #(reset! var (-> %
                                 .-target
                                 .-value))
     :type type}
    ]])

(defn ordered-list [val]
  (let [newItems @val]
    [:div.flex.flex-col {:class "items List"}(if (< (count newItems) 1) 
             "" 
             (for [x (range (count newItems))] [:div.card (nth newItems x)]))]))

(defn main-component []
  [:div.flex.flex-col.p-20
   [:h1.flex.text-3xl {:justify-content "center"} "Thing to do"]
   [:div.flex.justify-center
    [input-box "text " ""  itemAdd]
    [:button.btn-blue.hover:bg-teal-300 {:on-click #(do
                                                      (swap! counter inc)
                                                      (swap! valueAdd conj @itemAdd))}
     "press-me"]]
   (ordered-list  valueAdd)])

(defn mount [c]
  (dom/render  [c] (js/document.getElementById "app")))

(defn reload! []
  (mount main-component)
  (print "reloaded"))

(defn main! []
  (mount main-component)
  (print "main"))