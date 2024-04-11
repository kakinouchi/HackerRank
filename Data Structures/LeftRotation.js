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
