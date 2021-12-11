;
; Complete the 'marsExploration' function below.
;
; The function is expected to return an INTEGER.
; The function accepts STRING s as parameter.
;

(defn marsExploration [s]
 (let [right-message (->> (repeat (/ (count s) 3) "SOS")
                          (apply str))]
  (->> (map vector s right-message)
       (filter (fn [[original-char right-char]] (not= original-char right-char)))
       (count))))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def s (read-line))

(def result (marsExploration s))

(spit fptr (str result "\n") :append true)
