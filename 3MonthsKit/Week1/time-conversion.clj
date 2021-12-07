;; No.3
;
; Complete the 'timeConversion' function below.
;
; The function is expected to return a STRING.
; The function accepts STRING s as parameter.
;

(defn timeConversion [s]
  (let [am-pm (apply str (take-last 2 s))
        hour-on-12 (rem (Integer/parseInt (apply str (take 2 s))) 12)
        hour-on-24 (if (= "AM" am-pm) hour-on-12 (+ 12 hour-on-12))]
    (str
     (format "%02d" hour-on-24) 
     (apply str (->> s
                    (drop 2)
                    (drop-last 2))))))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def s (read-line))

(def result (timeConversion s))

(spit fptr (str result "\n") :append true)
