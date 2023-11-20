function increase(item){
    var res=document.querySelector("#likes");
    let res1=res.innerText;
    console.log(res1);
    var space=' ';
    var likes=parseFloat(res1.substr(0,res1.indexOf(space)));
    res.innerText=likes+1+' '+'likes';
}