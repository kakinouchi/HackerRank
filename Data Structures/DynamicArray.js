// 問題の要約。
// 最初に2つの整数が投げられる： n and q.
// n は、配列の要素数。
// arr は 要素数n の空配列が入った二重配列。
// q はクエリの数。

// クエリは2種類ある。
// クエリタイプ1. 1xy
//   x と lastAnswer のビット排他的論理和を取って、n で割ったあまりを index として、
//   arr[index] に y をつっこむ。
// クエリタイプ2. 2xy
//   x と lastAnswer のビット排他的論理和を取って、n で割ったあまりを index として、
//   arr[idx][7 % size(arr[idx])] を lastAnswer につっこむ。
//   lastAnswer を出力。

// Sample がこう。
// 1 0 5
// x = 0, y = 5, lastAnswer の初期値は 0 なので、
// (x ^ lastAnswer) % 2 == 0
// index = 0
// よって、arr[0] = 5;

// 1 1 7
// x = 1, y = 7, lastAnswer = 0 なので、
// (x ^ lastAnswer) % 2 == 1;
// よって、arr[1] = 7;

// 1 0 3
// x = 0, y = 3, lastAnswer = 0 なので、
// (x ^ lastAnswer) % 2 == 0;
// よって、arr[0] = 3;

// 2 1 0
// 2 1 1

// v1. ここまでやった。 queryType = 1 はできたんじゃないかな。
function dynamicArray(n, queries) {
    // Write your code here
    let lastAnswers = 0;
    const arrays = [...Array(3)].map(_ => [])
    const firstQuery = queries[1];
    const [queryType, x, y] = firstQuery;
    
    if( queryType == 1 ) {
        const index = (x ^ lastAnswers) % n;
        arrays[index] = [...arrays[index], y];
    }
    if( queryType == 2 ) {
        const index = (x ^ lastAnswers) % n;
        const secondIndex = y % arrays[index].length
    }    

    
    console.log(queries)
    
    return ["", ""];
}


