function inscrease(item){
    let res=item.innerText;
    var increa=parseFloat(item.innerText.substr(0,res.indexOf(' ')));
    console.log(increa);
    item.innerText=increa+1+' '+'likes';

}


function delet(item){
    item.remove();
}