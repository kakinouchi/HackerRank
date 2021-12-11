;
; Complete the 'countingValleys' function below.
;
; The function is expected to return an INTEGER.
; The function accepts following parameters:
;  1. INTEGER steps
;  2. STRING path
;

(defn countingValleys [steps path]
 (->> path
      (reduce
       (fn [acc curr]
        (case curr
         \U
         (cond-> acc
          true                   (update :level inc)
          (= (- 1) (:level acc)) (update :valleys-count inc))
         \D (update acc :level dec)))
       {:level 0 :valleys-count 0})
      (:valleys-count)))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def steps (Integer/parseInt (clojure.string/trim (read-line))))

(def path (read-line))

(def result (countingValleys steps path))

(spit fptr (str result "\n") :append true)
