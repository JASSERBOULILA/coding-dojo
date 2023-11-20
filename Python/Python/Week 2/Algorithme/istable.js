/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
  hasOwnProperty()
*/
var user = { username: "John", age: 35 }

// console.log(user.hasOwnProperty('age'));
// console.log(user.hasOwnProperty('email'));

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};
const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

function makeFrequencyTable(arr) {
    var dict={};
    var counter=0;
    for(var i=0;i<arr.length;i++){
        var res=arr[i];
        for(var j=0;j<arr.length;j++){
            if(res==arr[j]){
                counter++;
            }
        }
        dict[res]=counter;
        counter=0;
        res=arr[i+1]
    }
    return dict;
}


console.log(makeFrequencyTable(arr1));
console.log(makeFrequencyTable(arr2));
console.log(makeFrequencyTable(arr3));