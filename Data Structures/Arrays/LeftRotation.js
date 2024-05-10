// v1 。ロジックは合ってそうだけど、遅くてテストは2つ落ちた。

function shiftLeft(arr) {
    const [head, ...tail] = arr;
    return [...tail, head]
}

function range(n) {
    return [...Array(n).keys()]
}

function rotateLeft(d, arr) {
    // Write your code here
    const dTimes = range(d);
    return dTimes.reduce((acc, _) => (shiftLeft(acc)), arr);
}

// v2. 通ったー！

function rotateLeft(d, arr) {
    // Write your code here
    const firstDthElements = arr.slice(0, d);
    const theOthers = arr.slice(d);
    return [...theOthers, ...firstDthElements];
}

