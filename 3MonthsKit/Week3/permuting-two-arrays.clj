; Complete the 'twoArrays' function below.
;
; The function is expected to return a STRING.
; The function accepts following parameters:
;  1. INTEGER k
;  2. INTEGER_ARRAY A
;  3. INTEGER_ARRAY B
;

(defn twoArrays [k A B]
 (->> (map vector (sort < A) (sort > B))
      (every? (fn [[a b]] (<= k (+ a b))))
      (#(if % "YES" "NO"))))

;; この実装で十分な数学的説明：
;; 条件を満たす任意の配列の組は、適当に入れ替えることで A が昇順のソートされBが降順にソートされること示せばよい。
;; (この命題の対偶が「Aが昇順にソートされ、Bが降順にソートされてるようなペアで条件を満たす配列になっていなければ、他の配列でも条件を満たせない」。)
;; 条件を満たし、かつ、Aを昇順にソートしたような配列のペアを A'', B'' とする。この時 B'' を降順にソートできることを示す。
;; 任意の i に対して、
;; A''[i] <= A''[i+1] (1)
;; A''[i] + B''[i] >= k (2)
;; が成り立つので、仮に B''[j] < B''[j+1] だとすると、
;; B''[j] + A''[j+1] >= B''[j] + A''[j] >= k
;; B''[j+1] + A''[i] > B''[j] + A''[j] >= k
;; だから、B''[j] と B''[j+1] を入れ替えても (2) は満たされる。これを繰り返せば B''を降順にできる。

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def q (Integer/parseInt (clojure.string/trim (read-line))))

(doseq [q-itr (range q)]
    (def first-multiple-input (clojure.string/split (clojure.string/trimr (read-line)) #" "))

    (def n (Integer/parseInt (nth first-multiple-input 0)))

    (def k (Integer/parseInt (nth first-multiple-input 1)))

    (def A (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" "))))

    (def B (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" "))))

    (def result (twoArrays k A B))

    (spit fptr (str result "\n") :append true)
)
