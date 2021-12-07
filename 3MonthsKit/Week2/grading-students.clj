;
; Complete the 'gradingStudents' function below.
;
; The function is expected to return an INTEGER_ARRAY.
; The function accepts INTEGER_ARRAY grades as parameter.
;

(defn gradingStudents [grades]
  (let [professors-round (fn [grade]
                          (let [next-5-multiple (+ 5 (* 5 (quot grade 5)))
                                the-diff (- next-5-multiple grade)]
                            (cond
                                (< grade 38)   grade
                                (< the-diff 3) next-5-multiple
                                :else          grade)))]
    (map professors-round grades)))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def grades-count (Integer/parseInt (clojure.string/trim (read-line))))

(def grades [])

(doseq [_ (range grades-count)]
    (def grades 
      (conj grades
            (Integer/parseInt (clojure.string/trim (read-line)))
            ))
)

(def result (gradingStudents grades))

(spit fptr (clojure.string/join "\n" result) :append true)
(spit fptr "\n" :append true)
