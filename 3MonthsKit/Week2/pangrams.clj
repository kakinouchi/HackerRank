;
; Complete the 'pangrams' function below.
;
; The function is expected to return a STRING.
; The function accepts STRING s as parameter.
;

(defn pangrams [s]
 (->> s
      (reduce
       (fn [acc curr]
        (if (= curr \space)
         acc
         (conj acc (clojure.string/lower-case (str curr)))))
      #{})
      (#(if (= 26 (count %)) "pangram" "not pangram"))))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def s (read-line))

(def result (pangrams s))

(spit fptr (str result "\n") :append true)
