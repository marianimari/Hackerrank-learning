function minimumSwaps(arr) {
    let numSwap = 0;
    for (let i = 0; i < arr.length;) {
        if(arr[i]!==i+1){
            const num=arr[i];
            arr[i]= arr[num-1];
            arr[num-1]=num;
            numSwap++; 
            continue;   
        }else{
            i++;
        }
    }
return numSwap;

}
