class Ninja{
    constructor(name,health,speed,strength){
        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength

    }
    sayName(){
        console.log(`the Ninja name is ${this.name}`)
    }
    showStats(){
        console.log(`ninja name is ${this.name} and his stats is his health : ${this.health},and his speed is :${this.speed},and his strength : ${this.strength}`)
    }
    drinkShake(){
        this.health+=10;
        console.log(`you have gained +10 health ${this.health}`)
    }
}



class Sensei extends Ninja{
    constructor(name){
        super(name,200,10,10)
        this.widsom=10
    }
    speakWidsom(){
        super.drinkShake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    showStats(){
        super.showStats()
    }
}


const superNinja=new Sensei('Master Splinter')


superNinja.speakWidsom()
superNinja.showStats()
