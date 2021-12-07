;; Day2 No.2
;
; Complete the 'diagonalDifference' function below.
;
; The function is expected to return an INTEGER.
; The function accepts 2D_INTEGER_ARRAY arr as parameter.
;

(defn diagonalDifference [arr]
  (let [left-to-right (for [index (range (count arr))
                           :let [col-num index]]
                       (-> arr
                           (nth index)
                           (nth col-num)))
        sum-left-to-right (apply + (into [] left-to-right))
        right-to-left (for [index (range (count arr))
                           :let [col-num (- (- (count arr) 1) index)]]
                       (-> arr
                           (nth index)
                           (nth col-num)))
        sum-right-to-left (apply + (into [] right-to-left))]
    (if (> sum-left-to-right sum-right-to-left)
     (- sum-left-to-right sum-right-to-left)
     (- sum-right-to-left sum-left-to-right))))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def n (Integer/parseInt (clojure.string/trim (read-line))))

(def arr [])

(doseq [_ (range n)]
    (def arr (conj arr (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" ")))))
)

(def result (diagonalDifference arr))

(spit fptr (str result "\n") :append true)
