;; Day 1 No.2

;
; Complete the 'miniMaxSum' function below.
;
; The function accepts INTEGER_ARRAY arr as parameter.
;

(defn miniMaxSum [arr]
  (let [max-num (apply max arr)
        min-num (apply min arr)
        max-arrays (filter #(= % max-num) arr)
        min-arrays (filter #(= % min-num) arr)
        arr-wo-max (remove #(= % max-num) arr)
        arr-wo-min (remove #(= % min-num) arr)]
        
    (println
     (str (apply + (concat arr-wo-max (rest max-arrays))))
     (str (apply + (concat arr-wo-min (rest min-arrays)))))))

(def arr (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" "))))

(miniMaxSum arr)
