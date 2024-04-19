// v1. 遅くていくつかのテストで落ちちゃうけど、論理的にはあってるやつがいったんできた。

function arrayManipulation(n, queries) {
    // Write your code here
    const initialArray = [...Array(n).keys()].map( _ => 0 )
    
    // You can write the way to loop queries only one time
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
    
    return afterQueried.reduce((acc, current) => current >= acc ? current : acc)   
}
