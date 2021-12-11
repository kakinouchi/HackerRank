; Complete the 'twoArrays' function below.
;
; The function is expected to return a STRING.
; The function accepts following parameters:
;  1. INTEGER k
;  2. INTEGER_ARRAY A
;  3. INTEGER_ARRAY B
;

(defn twoArrays [k A B]
 (->> (map vector (sort < A) (sort > B))
      (every? (fn [[a b]] (<= k (+ a b))))
      (#(if % "YES" "NO"))))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def q (Integer/parseInt (clojure.string/trim (read-line))))

(doseq [q-itr (range q)]
    (def first-multiple-input (clojure.string/split (clojure.string/trimr (read-line)) #" "))

    (def n (Integer/parseInt (nth first-multiple-input 0)))

    (def k (Integer/parseInt (nth first-multiple-input 1)))

    (def A (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" "))))

    (def B (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" "))))

    (def result (twoArrays k A B))

    (spit fptr (str result "\n") :append true)
)
