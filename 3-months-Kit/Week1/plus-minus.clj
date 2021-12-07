;; No.1
;
; Complete the 'plusMinus' function below.
;
; The function accepts INTEGER_ARRAY arr as parameter.
;

(defn plusMinus [arr]
  (let [count-plus (count (filter pos? arr))
        count-minus (count (filter neg? arr))
        count-zero (count (filter zero? arr))
        arr-length (count arr)]
        
    (println (str (/ (float count-plus) arr-length)))
    (println (str (/ (float count-minus) arr-length)))
    (println (str (/ (float count-zero) arr-length)))))

(def n (Integer/parseInt (clojure.string/trim (read-line))))

(def arr (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" "))))

(plusMinus arr)
