;
; Complete the 'flippingBits' function below.
;
; The function is expected to return a LONG_INTEGER.
; The function accepts LONG_INTEGER n as parameter.
;

(defn flippingBits [n]
  (let [flip #(case %
                \0 \1
                \1 \0)
        in-base-2 (->> (Long/toString n 2)
                       (seq))
        one-padding (->> (repeat (- 32 (count in-base-2)) "1")
                         (apply str))]
    (->> in-base-2
        (map flip)
        (apply str)
        (str one-padding)
        (#(Long/parseLong % 2)))))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def q (Integer/parseInt (clojure.string/trim (read-line))))

(doseq [q-itr (range q)]
    (def n (Long/parseLong (clojure.string/trim (read-line))))

    (def result (flippingBits n))

    (spit fptr (str result "\n") :append true)
)
