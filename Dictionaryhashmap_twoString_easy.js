https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    // Write your code here
    let mapS1 = {}, mapS2={};
    let s1Arr = s1.split('');
    let s2Arr = s2.split('');
    let isSame = "NO";
    // console.log(s1Arr);
    // console.log(s2Arr);

    for (let char of s1Arr) {
        mapS1[char]= (mapS1[char] || char);
     
    }
  
    for (let char of s2Arr) {
        if(mapS1[char]){
            isSame = "YES";
            break;
        }
    }
    

   return isSame;
 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        const result = twoStrings(s1, s2);

        ws.write(result + '\n');
    }

    ws.end();
}
