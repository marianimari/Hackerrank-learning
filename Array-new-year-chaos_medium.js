function minimumBribes(q) {
    // Write your code here
    let isChaos = false;
    
    let totalBribe = 0;
    //console.log(q.length);
    let firstArr=[];
    // for (let a = 0; a < q.length; a++) {
    //    firstArr.push(a+1);
    // }
    //console.log("a"+firstArr);
  
    for (let i = 0; i < q.length; i++) {
      let bribe = 0;
      let found = false;
      
      for (let j = 0; j < q.length; j++) {
       // console.log("i = "+i+" j="+j+" "+firstArr);
        
        if (q[i] === j+1) {
          found = true;
          totalBribe += bribe;
          firstArr.splice(j, 1);
          if (bribe > 2) {
            isChaos = true;
            return console.log("Too chaotic");
          }
          break;
        } else {
          if (found ===false) {
            bribe++;
          }
        }
      }
    }
  
    if (isChaos === false) {
      console.log(totalBribe);
    }
  }
  
  minimumBribes([1, 2, 5, 3, 4,6]);
  