/* 
String Encode

You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

// ! Bonus
const str4 = "bbcc";
const expected4 = "bbcc";

const str5 = "bc";
const expected5 = "bc";

function encodeStr(str) {
    var res=0;
    var res2=0;
    var i=0;
    var result="";
    var first=str[0];
    if(str.length==0){
        return "";
    }else if(str.length==1){
        return str;
    }else{
        while(i<str.length){
            if(str[i]==first){
                res+=1;
                i++;
            }else{
                first=str[i]
                result=result+str[i-1]+res
                res=1;
                i++;
            }
        }
        return result+str[i-1]+res;
    }
}


console.log(encodeStr(str1));
console.log(encodeStr(str2));
console.log(encodeStr(str3));
console.log(encodeStr(str4));