;; Day2 No.1
;
; Complete the 'lonelyinteger' function below.
;
; The function is expected to return an INTEGER.
; The function accepts INTEGER_ARRAY a as parameter.
;

(defn lonelyinteger [a]
  (->> (frequencies a)
       (filter (fn [[k v]] (= v 1)))
       (first)
       (first)))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def n (Integer/parseInt (clojure.string/trim (read-line))))

(def a (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" "))))

(def result (lonelyinteger a))

(spit fptr (str result "\n") :append true)
