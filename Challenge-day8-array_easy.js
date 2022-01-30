//https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?isFullScreen=true

function processData(input) {
    //  console.log(input);
      message = input.split("\n");
      var n=parseInt(message[0]);
      let phoneBook= new Map();
       
      for(let i=1; i<=n; i++){
         const stringArr=message[i].split(" ");
         phoneBook.set(stringArr[0], stringArr[1]);
      }
      //console.log(phoneBook);
       for(let x=n+1; x<=message.length-1; x++){
           if(phoneBook.has(message[x])){
               console.log(message[x]+"="+ phoneBook.get(message[x]))
           }else{
               console.log("Not found");
           }
           
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
  