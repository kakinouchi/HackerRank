;; Day2 No.3
;
; Complete the 'countingSort' function below.
;
; The function is expected to return an INTEGER_ARRAY.
; The function accepts INTEGER_ARRAY arr as parameter.
;

(defn countingSort [arr]
  (let [init-data (into [] (repeat (count arr) 0))]
   (->> arr
       (reduce (fn [acc curr] (update acc curr inc)) init-data)
       (take 100))))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def n (Integer/parseInt (clojure.string/trim (read-line))))

(def arr (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" "))))

(def result (countingSort arr))

(spit fptr (clojure.string/join " " result) :append true)
(spit fptr "\n" :append true)
