

;
; Complete the 'breakingRecords' function below.
;
; The function is expected to return an INTEGER_ARRAY.
; The function accepts INTEGER_ARRAY scores as parameter.
;

(defn breakingRecords [scores]
  (->> (rest scores)
       (reduce
        (fn [acc curr]
            (cond    
             (> curr (:max acc))
             (-> acc
                (assoc :max curr)
                (update :max-breaking-times inc))

             (< curr (:min acc))
             (-> acc
                (assoc :min curr)
                (update :min-breaking-times inc))
            
             :else
             acc))
        {:min (first scores) :min-breaking-times 0
         :max (first scores) :max-breaking-times 0})
        ((juxt :max-breaking-times :min-breaking-times))))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def n (Integer/parseInt (clojure.string/trim (read-line))))

(def scores (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" "))))

(def result (breakingRecords scores))

(spit fptr (clojure.string/join " " result) :append true)
(spit fptr "\n" :append true)
