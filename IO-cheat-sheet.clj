;; Read multi lines.
(def s (line-seq (java.io.BufferedReader. *in*)))

;; or
(def foo [])

(doseq [_ (range some-count)]
    (def foo 
      (conj foo
            (Integer/parseInt (clojure.string/trim (read-line)))
            ))
)
