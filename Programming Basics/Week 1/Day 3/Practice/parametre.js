//lvl 1
var person='jasser';
function greet(person){
    console.log('good day'+' '+ person);
}
greet(person);
//--- lvl2----
var d=new Date();
var hours=d.getHours();
var min=d.getMinutes();
var time=hours+":"+min;
function greet2(person,time){
    if(time.substr(0,2)>11 && time.substr(0,2)<6){
        console.log('Good morning,'+' '+person+' the time of the day  is '+time);
    }else{
        console.log('Good evening,'+' '+person+' the time of the day  is '+time)
    };
}
greet2(person,time);

function greet3(person){
    if(person=="Count Douku"){
        console.log("I'm coming for you, Dooku!" );
    }
    else{
        console.log('good day'+' '+person);
    }
}
greet3(person);
