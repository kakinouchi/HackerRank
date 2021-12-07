; Enter your code here. Read input from STDIN. Print output to STDOUT

(defn convert [input-line]
 (let [[op word-type word] (clojure.string/split input-line #";")]
  (cond
    (and (= op "S") (= word-type "M"))
    (-> word
       (clojure.string/replace #"\(\)" "")
       (clojure.string/replace #"[A-Z]" #(str " " (clojure.string/lower-case %))))
   
    (and (= op "S") (= word-type "C"))
    (->> (clojure.string/replace word #"[A-Z]" #(str " " (clojure.string/lower-case %)))
        (rest)
        (apply str))
   
    (and (= op "S") (= word-type "V"))
    (clojure.string/replace word #"[A-Z]" #(str " " (clojure.string/lower-case %)))

    (and (= op "C") (= word-type "M"))
    (-> (clojure.string/replace word #"( )(.)" #(clojure.string/upper-case (% 2)))
       (str "()"))
       
    (and (= op "C") (= word-type "C"))
    (->> (clojure.string/split word #" ")
        (map #(str (clojure.string/upper-case (first %))
                   (apply str (rest %))))
        (apply str))
   
    (and (= op "C") (= word-type "V"))
    (->> (clojure.string/split word #" ")
         (map #(str (clojure.string/upper-case (first %))
                    (apply str (rest %))))
         (apply str)
         (#(str (clojure.string/lower-case (first %))
                (apply str (rest %))))))))

(def s (line-seq (java.io.BufferedReader. *in*)))

(doseq [x (map convert s)]
 (println x))
