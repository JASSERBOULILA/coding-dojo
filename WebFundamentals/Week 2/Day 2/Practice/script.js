function accept(){
    var res=document.querySelector(".badge");
    var rem=document.querySelector(".card-list-item")
    var connection=document.querySelector("#badge");
    rem.remove();
    res.innerText=res.innerText-1;
    var res1=parseFloat(connection.innerText.substr(0,connection.innerText.indexOf("+")));
    connection.innerText=res1+1+"+";
    console.log(connection.innerText);

}



function refuse(){
    var res=document.querySelector(".badge");
    var rem=document.querySelector(".card-list-item")
    rem.remove();
    res.innerText=res.innerText-1;
}

function edit(){
    var change=document.querySelector(".card-body h1");
    var list=["Todd E","Valkyrie A","Jasser Jone","Anis Rouis","Adrien D","Anne j"];
    var random=Math.floor(Math.random()*((list.length)-1));
    console.log(random);
    change.innerText=list[random];
}
