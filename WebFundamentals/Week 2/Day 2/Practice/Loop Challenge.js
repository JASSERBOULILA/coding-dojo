function odd(){
    for(var i=1;i<20;i++){
        if(i%2!=0){
            console.log('odd')
        }
    }
}
odd();


function decreasing(){
    for(let i=100;i>0;i--){
        if(i%3==0){
            console.log(i+'mutiple by 3');
        }
    }
}
console.log(decreasing());




function sequence(){
    for(let i=4 ;i>-4;i=i-1.5){
        console.log(i);
    }
}
sequence();




function sigma() {
    let res=0;
    for(let i=1;i<=100;i++){
        res+=i;
    }
    console.log(res);
}
sigma();



function factorial(){
    let res=1;
    for(let i =1;i<=12;i++){
        res*=i;
    }
    console.log(res);

}
factorial();