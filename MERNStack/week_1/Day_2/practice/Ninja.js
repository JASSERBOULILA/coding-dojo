class Ninja{
    constructor(name){
        this.name=name
        this.health=90
        this.speed=3
        this.strength=3

    }
    sayName(){
        console.log(`the Ninja name is ${this.name}`)
    }
    showStats(){
        console.log(`ninja name is ${this.name} and his stats is his health : ${this.health},and his speed is :${this.speed},and his strength : ${this.strength}`)
    }
    drinkShake(){
        this.health+=10;
    }
}






const ninja1 = new Ninja("Hyabusa");
ninja1.drinkShake();
ninja1.sayName();
ninja1.showStats();
