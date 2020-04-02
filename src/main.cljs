(ns main
  (:require [reagent.dom :as dom]
            [reagent.core :as r]
            ))

(def itemAdd (r/atom ""))
(def valueAdd (r/atom ()))
(def counter (r/atom 0))

(defn input-box  [type label var]
  [:div.input-box
   [:input 
    {:on-change #(reset! var (-> %
                                 .-target
                                 .-value))
     :type type}
    ]])

(defn toggle-class [a k class1 class2]
(prn (@a k) class1 class2)
  (if (= (@a k) class1)
    (swap! a assoc k class2)
    (swap! a assoc k class1)
    ))

(defn card [item a]
    [:li {:class (:card-state @a)}
     [:div.card
      [:ul.ba
       [:label.switch
        [:input  {:type "checkbox"}] 
        [:span.slider.round
         {:on-click #(toggle-class a :card-state "incomplete" "complete")}]]
       item]]])

(defn ordered-list [val]
  (let [newItems @val]
    [:div.flex.flex-col {:class "items List"}
     (for [x (range (count newItems))] 
       (let [local-state (r/atom {:card-state "incomplete"})]               
         [card (nth newItems x) local-state])
       )]))

(defn main-component []
  [:div.flex.flex-col.p-20 {:justify-content "center"}
   [:h1.flex.text-3xl {:justify-content "center"} "Thing to do"]
   [:div.flex.justify-center
    [input-box "text" ""  itemAdd]
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