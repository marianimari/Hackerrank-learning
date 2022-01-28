https://www.hackerrank.com/challenges/30-arrays/problem?isFullScreen=true

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


//Solution
function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    let arrResult=[];
    
    for(let i=arr.length-1; i>=0; i--){
        arrResult.push(arr[i]);
    }
    
    console.log(arrResult.join(" "));
    
}
