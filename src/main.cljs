(ns main
  (:require [reagent.dom :as dom]
            [reagent.core :as r]
            ))

(def itemAdd (r/atom ""))
(def valueAdd (r/atom  ()))
(def counter (r/atom 0))
(def cardStateHolder (r/atom ()))

(defn input-box  [type label var]
  [:div.input-box
   [:input 
    {:on-change #(reset! var (-> %
                                 .-target
                                 .-value))
     :type type}
    ]])

(defn toggle-class [a k class1 class2]
  (if (= (@a k) class1)
    (swap! a assoc k class2)
    (swap! a assoc k class1)))

(defn card [item]
  (let [local-state (r/atom {:card-state "incomplete"})]
    (fn [] [:li {:class (:card-state @local-state)}
            [:div.card
             [:ul.ba
              [:label.switch
               [:input  {:type "checkbox"}]
               [:span.slider.round
                {:on-click #(toggle-class local-state :card-state "incomplete" "complete")}]]
              item]]])))

(defn ordered-list [val]
  (let [newItems @val]
    [:div.flex.flex-col {:class "items List"}
     (for [x (range (count newItems))] 
         [card (nth newItems x) ])]))

(defn main-component []
  [:div.flex.flex-col.p-20 {:justify-content "center" }
   [:section.todoapp
    [:header.header
     [:h1 "todos"]]
    [:div.flex.justify-center
     [input-box "text" ""  itemAdd]
     [:button.btn-blue.hover:bg-teal-300 {:on-click #(do
                                                       (swap! counter inc)
                                                       (swap! valueAdd conj @itemAdd))}
      "press-me"]]]
   (ordered-list  valueAdd)])

(defn mount [c]
  (dom/render  [c] (js/document.getElementById "app")))

(defn reload! []
  (mount main-component)
  (print "reloaded"))

(defn main! []
  (mount main-component)
  (print "main"))
