// (2024年4月19日)
// v1. 遅くていくつかのテストで落ちちゃうけど、論理的にはあってるやつがいったんできた。

function arrayManipulation(n, queries) {
    // Write your code here
    const initialArray = [...Array(n).keys()].map( _ => 0 )
    
    // You can write the way to loop queries only one time

    // この発想だと、n*m 回の操作が必要。
    const afterQueried = queries.reduce( (acc, currentQuery) => {
        const [leftIndex, rightIndex, summand] = currentQuery;
        const [leftIndexInZeroIndexed, rightIndexInZeroIndexed] = 
            [leftIndex - 1, rightIndex - 1];
        
        return acc.map( (item, index) => {
            if( leftIndexInZeroIndexed <= index && index <= rightIndexInZeroIndexed ) {
                return item + summand;
            }
            return item;
        });
    }, initialArray);

    // ここで O(n) 。
    return afterQueried.reduce((acc, current) => current >= acc ? current : acc);

    // なので、結局、O(n*m) + O(n) = O(n*m) のオーダー。
}

// (2024年4月22日)
// 途中でオーダーを書いたようなオーダーになるので、
// v1 の速度を改善するには、O(m) のオーダーになると嬉しい。
// (n <= 10^7 , m <= 2 * 10^5 なので、m の方が小さい可能性が高い。)
// え、こんなんできんの？

// あ、なんか、a と b の range のイメージを考えてたらふと気づいたけど、
// a と b の範囲内に入るような index のうち、最頻の　index とその頻度が求まれば、
// freqOfIndex * summand が答えか。

// (2024年4月23日)
// n 個の整数の配列が与えられた時、その最頻値を数えるのは簡単っぽい。
// n 個の range の配列が与えられた時、各range に入るのものを数えるのも似たような感じでできるかな。

// (2024年4月25日)
// 「n 個の整数の配列が与えられた時、その最頻値を数える」を引き続き考えている。
// テストデータを観察してみる。
// const array1 = [0, 1, 1, 2, 2, 2];
// 一回負けたけどあとから一番になるパターン
// const array2 = [0, 1, 1, 2, 2, 2, 1, 1];
// なので、データ構造を工夫するというよりも、降順にソートしながら並び替えて、最後に先頭を取るのがいい？

// (2024年4月26日)
// 悔しいけどネットの解説を読んだ。どうやら累積和という配列の特定の範囲の和を求めるのに便利な有名テクニックがあるらしい。
// ただ、この問題への応用はすぐには思いついてない。
// 本だと、『競技プログラミングの鉄則』がよくまとまってそう。

// (2024年4月30日)
// 解説を読んだ。累積和の逆のプロセスをやろうってことね。

// (2024年5月2日)
// もう少し理解を深めた。
// 1 2 100
// 2 5 100
// 3 4 100

// の例で考える。


// 最初のクエリのあと、
// 配列はこうなる　　　　　　　　　　　　　　　　：[100, 100, 0, 0, 0]
// これを累積和の配列だと見ると、元の配列はこう　：[100, 0, -100, 0, 0, 0]

// a=1, b=2, k=100 だから、
// arr[a-1] = k;
// arr[b] = -k;


// 2つ目のクエリのあと、
// 配列はこうなる　　　　　　　　　　　　　　　　：[100, 200, 100, 100, 100]
// これを累積和の配列だと見ると、元の配列はこう　：[100, 100, -100, 0, 0, -100]

// a=2, b=5, k=100 だから、
// arr[a-1] = k;
// arr[b] = -k;


// 3つ目のクエリのあと、
// 配列はこうなる　　　　　　　　　　　　　　　　：[100, 200, 200, 200, 100]
// これを累積和の配列だと見ると、元の配列はこう　：[100, 100, 0, 0, -100, -100]

// a=3, b=4, k=100 だから、
// arr[a-1] = k;
// arr[b] = -k;


// で、最後の元の配列から、累積和を計算しつつ、最大値を求めればいいのか。

// const cumulativeSumArray = array.reduce((acc, current) => )

// つまり、この問題のポイントは、
// 累積和と元の配列は常に行き来できるから、
// クエリごとに累積させるのではなくて、クエリをなめきったあとに一回だけ累積和の計算をする
// ということか。

// (2024年5月7日）
// コードに落としてみたけど、上のサンプルで実行したところ、3つ目のクエリのあとの結果が一致しないな。

function arrayManipulation(n, queries) {
    // Write your code here
    const cumulativeSumArray = Array(n).fill(0);
    const generatingArray = Array(n + 1).fill(0);
    
    // You can write the way to loop queries only one time

    const arrayAfterQueried = queries.reduce( (acc, currentQuery) => {
        const [leftIndex, rightIndex, summand] = currentQuery;
        const [leftIndexInZeroIndexed, rightIndexInZeroIndexed] = 
            [leftIndex - 1, rightIndex - 1];
        
        const newCumulativeArray = acc.map( (item, index) => {
            if( leftIndexInZeroIndexed <= index && index <= rightIndexInZeroIndexed ) {
                return item + summand;
            }
            return item;
        });
        
        generatingArray[leftIndex - 1] = summand;
        generatingArray[rightIndex] = -summand;
        
        console.log("updated:")
        console.log(newCumulativeArray)
        console.log(generatingArray)
        
        return newCumulativeArray;
 
    }, cumulativeSumArray);

    return arrayAfterQueried.reduce((acc, current) => current >= acc ? current : acc);
}

// (2024年5月8日)
// できたー！
function arrayManipulation(n, queries) {
    // Write your code here
    // const cumulativeSumArray = Array(n).fill(0);
    const generatingArray = Array(n + 1).fill(0);
    
    // You can write the way to loop queries only one time
    
    queries.forEach( query => {
        const [leftIndex, rightIndex, summand] = query;
        generatingArray[leftIndex - 1] += summand;
        generatingArray[rightIndex] += -summand;
    })
        
    const cumulativeSummed = generatingArray.reduce((acc, current) => {
        const newCumulativeSum = acc.cumulativeSum + current;
        
        return {
            cumulativeSum: newCumulativeSum,
            max: acc.max >= newCumulativeSum ? acc.max : newCumulativeSum
        }
    }, {
        cumulativeSum: 0,
        max: 0,
    })

    return cumulativeSummed.max;
}

