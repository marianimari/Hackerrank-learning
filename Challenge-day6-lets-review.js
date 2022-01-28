https://www.hackerrank.com/challenges/30-review-loop/problem?isFullScreen=true

//Solution
function processData(input) {
    //Enter your code here
    message = input.split("\n");
    var n = parseInt(message[0]);

    for (let x = 1; x <= n; x++) {
        const stringArr = message[x].split("");
        let resultArr="";
        let oddArr = [];
        let evenArr = [];
        for (let i = 0; i < stringArr.length; i++) {
            if (i % 2 === 0) {
            evenArr.push(stringArr[i]);
            }else{
                   oddArr.push(stringArr[i]);
            }
        }
    
            resultArr= evenArr.join("")+" "+oddArr.join("");
      
            console.log(resultArr);
    }
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});