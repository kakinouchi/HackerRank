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
