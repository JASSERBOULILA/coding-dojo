/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const strA = "  object   oriented      programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const strB = "   Abstraction    polymorphism    inheritance         encapsulation";
const expectedB = "APIE";

const strC = "  software   development   life cycle";
const expectedC = "SDLC";

const strD = "  global   information tracker    ";
const expectedD = "GIT";

function acronimize(str){
    var res="";
    var resfinale="";
    if(str.length==0){
        return -1
    }else{
        par=str.split(" "); 
        for(var i=0;i<par.length;i++){
            if( ("A" <= par[i].toUpperCase() && par[i].toUpperCase() <= "Z")){
                res=par[i];
                console.log(res);
                resfinale=resfinale+res[0].toUpperCase();
                }
            }
        }
        return resfinale
    }

console.log(acronimize(strC));
console.log(acronimize(strA));
console.log(acronimize(strB));
console.log(acronimize(strD));



//- Bonus: ignore extra spaces
// const strD = "  global   information tracker    ";
// const expectedD = "GIT";