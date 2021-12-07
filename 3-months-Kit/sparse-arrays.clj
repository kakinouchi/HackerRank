

;
; Complete the 'matchingStrings' function below.
;
; The function is expected to return an INTEGER_ARRAY.
; The function accepts following parameters:
;  1. STRING_ARRAY strings
;  2. STRING_ARRAY queries
;

(defn matchingStrings [strings queries]
  (->> queries
       (map (fn [query]
             (count (filter #(= % query) strings))))))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def strings-count (Integer/parseInt (clojure.string/trim (read-line))))

(def strings [])

(doseq [_ (range strings-count)]
    (def strings (conj strings (read-line)))
)

(def queries-count (Integer/parseInt (clojure.string/trim (read-line))))

(def queries [])

(doseq [_ (range queries-count)]
    (def queries (conj queries (read-line)))
)

(def res (matchingStrings strings queries))

(spit fptr (clojure.string/join "\n" res) :append true)
(spit fptr "\n" :append true)
