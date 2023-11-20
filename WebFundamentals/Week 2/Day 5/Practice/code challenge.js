function alwaysHungry(arr) {
    // your code here
    var count=0;
    var ok=false; 
    for(var i=0;i<arr.length;i++){
        if(arr[i]=="food"){
            count+=1;
        }
        else if(arr[i]!="food"){
            ok=true;
        }
    }
    if(count>=1){
        for(var i=0;i<count;i++){
            console.log("yummy");
        }
    }else if(ok===true && count ===0){
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2,4]);
// this should console log "I'm hungry"





// 2nd challenge
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(let i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// code challenge 3
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    var count = 0
    // count how many values are greated than the average

    for(let i=0;i<arr.length;i++){
        if(arr[i]>avg){
            count+=1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4




// code challenge 4


function reverse(arr) {
    // your code here
    var newarr=[];
    for(let i=0;i<arr.length;i++){
        newarr.push(arr[arr.length-1-i]);
    }
    arr=newarr;
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



// code challenge fibonacci

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for(let i=2;i<n;i++){
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]




