/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/
//                   v
const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:
// create the function and decide what params it needs and what it will return
function join(arr, separator) {
    var res="";
    if(arr.length==0){
        return ""
    }else if(arr.length==1){
        return arr[0]
    }else{
        for(let i =0;i<arr.length;i++){
            res=res+arr[i];
            if(i<arr.length-1){
                res+=separator;
            }
        }
    }
    return res
}


console.log(join(arr3,separator3))