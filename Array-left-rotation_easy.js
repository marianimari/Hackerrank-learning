function rotLeft(a, d) {
    // Write your code here
    let a2 = [];
    for (let i = 0; i < d; i++) {
        for (let j = 0; j < a.length; j++) {
           if(j===0){
               a2[a.length-1]=a[j];
           } 
           else{
               a2[j-1]=a[j];
           }
        }
        a=a2;
        a2=[];
    }
    
    return a;
}
//best solution
function rotLeft(a, d) {
    // Write your code here
    let a2 = a;
    for (let i = 0; i < d; i++) {
        const firstItem=a2.shift();
        a2.push(firstItem);
    }
    
    return a2;
}