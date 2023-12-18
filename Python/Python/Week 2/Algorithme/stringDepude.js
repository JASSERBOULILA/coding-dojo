/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/
const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "hello";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";


const str5="aabacdc";
const expected5="badc";
/**
 * De-dupes the given string.
 */

// function stringDedupe(str) {
//     var res="";
//     var finale="";
//     var counter=0;
//     for(var i=0;i<str.length;i++){
//         res=str[i]
//         for(var j=0;j<str.length;j++){
//             if(res==str[j]){
//                 counter++;
//             }
//         }
//         if(counter!=2){
//             finale+=res;
//             counter=0;
//         }
//     }
//     return finale;
// }

// function stringDedupe(str){
//     var res="";
//     for(var i=0;i<str.length;i++){
//         var finale=str[i];
//         if(res.indexOf(finale)==-1){
//             res+=finale;
//         }
//     }
//     return res;
// }


console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));
console.log(stringDedupe(str5));