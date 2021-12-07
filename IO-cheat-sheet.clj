;; 1. Read a line
(def foo (Integer/parseInt (clojure.string/trim (read-line))))


;; 2. Read multi lines.
(def s (line-seq (java.io.BufferedReader. *in*)))

;; or
(def bar [])

(doseq [_ (range some-count)]
    (def bar 
      (conj bar
            (Integer/parseInt (clojure.string/trim (read-line)))
            ))
)
