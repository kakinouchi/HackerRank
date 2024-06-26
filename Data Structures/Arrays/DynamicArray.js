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
// つまり、index = 0
// よって、arr[0] = [5];

// 1 1 7
// x = 1, y = 7, lastAnswer = 0 なので、
// (x ^ lastAnswer) % 2 == 1;
// つまり、index = 1
// よって、arr[1] = [7];

// 1 0 3
// x = 0, y = 3, lastAnswer = 0 なので、
// (x ^ lastAnswer) % 2 == 0;
// つまり、index = 0
// よって、arr[0] = [5, 3];

// 2 1 0
// x = 1, y = 0, lastAnswer = 0 なので、
// (x ^ lastAnswer) % 2 == 1
// つまり、index = 1
// y % size(arr[idx]) == 0
// なので、
// arr[1][0] つまり 7 を lastAnswer に。 

// 2 1 1
// x = 1, y = 1, lastAnswer = 7 なので、
// (x ^ lastAnswer) % 2 == 6 % 2 == 0
// つまり、index = 0
// y % size(arr[idx]) == 1 % 2 == 1
// なので、
// arr[0][1] つまり 3 を lastAnswer に。 

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

// v2. テストケースは通るけど submit したら落ちたー
function dynamicArray(n, queries) {
    // Write your code here
    let lastAnswerHistory = [0];
    const arrays = [...Array(3)].map(_ => [])
    
    
    queries.forEach( query => {
        const lastAnswer = lastAnswerHistory.slice(-1);
        const [queryType, x, y] = query;
    
        if( queryType == 1 ) {
            const index = (x ^ lastAnswer) % n;
            console.log(index)
            arrays[index] = [...arrays[index], y];
        }
        if( queryType == 2 ) {
            const index = (x ^ lastAnswer) % n;
            const secondIndex = y % arrays[index].length
            lastAnswerHistory = [...lastAnswerHistory, arrays[index][secondIndex]]
        }
    })
    
    const [_, ...lastAnswerToReturn] = lastAnswerHistory;

    return lastAnswerToReturn;
}

// v3. 通ったー！。Array(3) のベタ書きが原因だったw
function dynamicArray(n, queries) {
    // Write your code here
    let lastAnswerHistory = [0];
    const arrays = [...Array(n)].map(_ => [])
    
    queries.forEach( query => {
        const lastAnswer = lastAnswerHistory.slice(-1);
        const [queryType, x, y] = query;
    
        if( queryType == 1 ) {
            const index = (x ^ lastAnswer) % n;
            console.log(index)
            arrays[index] = [...arrays[index], y];
        }
        if( queryType == 2 ) {
            const index = (x ^ lastAnswer) % n;
            const secondIndex = y % arrays[index].length
            lastAnswerHistory = [...lastAnswerHistory, arrays[index][secondIndex]]
        }
    })
    
    const [_, ...lastAnswerToReturn] = lastAnswerHistory;

    return lastAnswerToReturn;
}

// v4. lastAnswerHistory の let 宣言をやめて少し immutable に。
function dynamicArray(n, queries) {
    const arrays = [...Array(n)].map(_ => [])
    
    const lastAnswerHistory = queries.reduce((acc, current) => {
        const lastAnswer = acc.slice(-1);
        const [queryType, x, y] = current;
    
        if( queryType == 1 ) {
            const index = (x ^ lastAnswer) % n;
            console.log(index)
            arrays[index] = [...arrays[index], y];
            return acc;
        }
        if( queryType == 2 ) {
            const index = (x ^ lastAnswer) % n;
            const secondIndex = y % arrays[index].length
            return [...acc, arrays[index][secondIndex]]
        }
    }, [0])
    
    const [_, ...lastAnswerToReturn] = lastAnswerHistory;

    return lastAnswerToReturn;
}

// v5. さらに immutable なコードにしたら、遅すぎていくつかのテストで落ちてしまった。もうちょっと考えたい。
function dynamicArray(n, queries) {
    const initialState = {
        lastAnswerHistory: [0],
        arrays: [...Array(n)].map(_ => [])
    }

    const lastAnswerHistoryAndArrays = queries.reduce((acc, current) => {
        const lastAnswerHistory = acc.lastAnswerHistory;
        const arrays = acc.arrays;
        
        const lastAnswer = lastAnswerHistory.slice(-1);
        const [queryType, x, y] = current;
    
        if( queryType == 1 ) {
            const index = (x ^ lastAnswer) % n;
            const newValue = [...arrays[index], y]
            const newArray = [
                ...arrays.slice(0, index),
                newValue,
                ...arrays.slice(index + 1)
            ]
            return {
                ...acc,
                arrays: newArray
            };
        }
        if( queryType == 2 ) {
            const index = (x ^ lastAnswer) % n;
            const secondIndex = y % arrays[index].length
            return {
                ...acc,
                lastAnswerHistory: [...lastAnswerHistory, arrays[index][secondIndex]]
            }
        }
    }, initialState)
    
    const [_, ...lastAnswerToReturn] = lastAnswerHistoryAndArrays.lastAnswerHistory;

    return lastAnswerToReturn;
}

// v6. v5 の改善版。

function dynamicArray(n, queries) {
    const initialState = {
        lastAnswerHistory: [0],
        arrays: [...Array(n)].map(_ => [])
    }

    const lastAnswerHistoryAndArrays = queries.reduce((acc, currentQuery) => {
        const lastAnswerHistory = acc.lastAnswerHistory;
        // const newArrays = [...acc.arrays]; ディープコピーするとテストが落ちる。
        const newArrays = acc.arrays;
        
        const lastAnswer = lastAnswerHistory.slice(-1);
        const [queryType, x, y] = currentQuery;
    
        if( queryType == 1 ) {
            const index = (x ^ lastAnswer) % n;
            newArrays[index] = [...newArrays[index], y];
            return {
                ...acc,
                arrays: newArrays
            };
        }
        if( queryType == 2 ) {
            const index = (x ^ lastAnswer) % n;
            const secondIndex = y % newArrays[index].length
            return {
                ...acc,
                lastAnswerHistory: [...lastAnswerHistory, newArrays[index][secondIndex]]
            }
        }
    }, initialState)
    
    const [_, ...lastAnswerToReturn] = lastAnswerHistoryAndArrays.lastAnswerHistory;

    return lastAnswerToReturn;
}



