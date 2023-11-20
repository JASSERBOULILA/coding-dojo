function fizzBuzz(){
    for(let i=1;i<100;i++){
        if(i%3==0 && i%5==0 ){
            console.log('FizzBuzz');
        }else if(i%5==0){
            console.log("Buzz");
        }else if( i%3==0){
            console.log('fizz');
        }
        else{
            console.log(i);
        }
    }
}
fizzBuzz();
console.log(15%3==0 && 15%5==0);