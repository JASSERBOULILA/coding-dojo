function accept(elemnt){
    var ele=document.querySelector(".down-navbar");
    ele.remove();
}


function affiche(){
    alert("Loading the report of ....");
}


function convert(){
    var slect = document.querySelector('#myselect')
    var hot1=document.querySelector(".degree p:nth-child(1)")
    var hot2=document.querySelector(".degree p:nth-child(2)")
    console.log(hot1.innerHTML);
    console.log(hot2.innerHtml);
    if(slect.value == "°C") {
        slect.value = "°F";
        hot1.innerText=change(parseFloat(hot1.innerHTML));
        console.log(hot1);
    }
    else if(slect.value=="°F"){
        slect.value="°C";
        hot2.innerText=change(parseFloat(hot2.innerHTML));
        console.log(hot2);
    } 
}


function change(id){
    return Math.floor((id * (9/5)) + 32);
}