function alerrt(){
    alert("You can call Us at :555-555-555");
}

function playY(){
    var play=document.querySelector("#img1");
    document.querySelector("#audio").play();
}


function hover1(){
    var first="Salmon , tuna , tofu";
    var second=document.querySelector('#protein').innerText;
    var e= document.querySelector('#protein');
    var res=second+"<br>"+first;
    e.innerHTML=res;
    console.log(res);
}
function over(){
    var second=document.querySelector('#protein').innerText;
    var e= document.querySelector('#protein');
    e.innerHTML="choose your protein";
}
function base(){
    var first="rice,quinoa,soba,noodles";
    var second=document.querySelector('#base').innerText;
    e= document.querySelector('#base');
    var res=second+"<br>"+first;
    e.innerHTML=res;

}

function over1(){
    var second=document.querySelector('#base').innerText;
    var e= document.querySelector('#base');
    e.innerHTML="Choose your base";
}

function mari(){
    var first="ponzu , sriracha aoili,sesame miso";
    var second=document.querySelector('#marinade').innerText;
    e= document.querySelector('#marinade'); 
    var res=second+"<br>"+first;
    e.innerHTML=res;

}
function over2(){
    var second=document.querySelector('#marinade').innerText;
    var e= document.querySelector('#marinade');
    e.innerHTML="Choose your marinade";
}