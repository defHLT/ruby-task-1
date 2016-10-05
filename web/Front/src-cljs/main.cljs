(ns Front.core
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<! put! chan]]
            [hiccups.runtime :as hiccupsrt]
            [goog.dom :as dom]
            [goog.events :as events]))

(def ^:const main (html [:form
                         [:input {:name "image" :type "url" :id "url"}]
                         [:input {:type "submit" :value "add task" :id "upload-btn" }]]
                        [:ul {:id "task-list"}]))

(defn task-list [] (dom/getElement "task-list"))

(defn render-initial
  []
  (let [body (first (array-seq (.getElementsByTagName js/document "body")))]
      (set! (.-innerHTML body) main)))

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (.preventDefault e) (put! out e)))
    out))


(defn init
  []
  (render-initial)

  (let [adds (listen (dom/getElement "upload-btn") "click")
        dels (listen (task-list) "click")]

    (go (while true
          (<! adds)
          (add-task)))

    (go (while true
          (let [e (<! dels)
                target (.-target e)
                klazzes (.-classList target)]
            (if (.contains klazzes "remove-task")
              (-> (.getAttribute target "data-id")
                  (delete-task))))))))

(defn add-task
  []
  (go (let [url (-> (dom/getElement "url") .-value)
            response (<! (http/post "/tasks" {:form-params {:image url}}))]
        (fetch-tasks))))

(defn delete-task
  [id]
  (go (let [response (<! (http/delete (str "task/" id)))]
        (fetch-tasks))))

(defn render-task
  [task]
  (let [id (get task :id)
        _ (get task :image)]
    [:li
     [:a {:href ""
          :class "remove-task"
          :data-id id}
      "[X]"]
     [:a {:href (str "task/" id)
          :target "_blank"}
      id]]))

(defn fetch-tasks
  []
  (go (let [response (<! (http/get "/tasks"))
            body (:body response)
            tasks (html (map render-task body))]
        (set! (.-innerHTML (task-list)) tasks))))

(set! (.-onload js/window)
      (fn [] (init)
           (fetch-tasks)))

