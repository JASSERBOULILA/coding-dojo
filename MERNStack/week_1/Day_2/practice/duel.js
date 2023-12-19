class Card{
    constructor(name,cost){
        this.name=name
        this.cost=cost
    }
}

class Unit extends Card{ 
    constructor(name,cost,power,res){
        super(name,cost)
        this.power=power
        this.res=res
    }
    attack(target){
        console.log(target)
        if( target instanceof Unit ) {
            if(target.stat=='res'){
                let number=target.magnitude
                console.log(parseInt(number.substr(1)))
                number = parseInt(number.substr(1));
                if(target.magnitude.charAt(0)=="+"){
                    this.res+=number
                    console.log(`the target has raised his resilience from ${this.res} to ${this.res + number}`)
                }else if(target.magnitude.charAt(0)=="-"){
                    this.res-=number
                    console.log(`Decrease Target resilience by : ${number}`)
                }
            }else if(target.stat=="power" ){
                let number=target.magnitude
                console.log(parseInt(number.substr(1)))
                number = parseInt(number.substr(1));
                if(target.magnitude.charAt(0)=="+"){
                    this.power+=number
                    console.log(`the target has raised his power from ${this.power} to ${this.power + number}`)
                }else if(target.magnitude.charAt(0)=="-"){
                    this.res-=number
                    console.log(`Decrease Target resilience by : ${number}`)
                }
            }
        }else{
            throw new Error( "Target must be a unit!" );
        }
        return this;
    }
}

class Effects extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost)
        this.text=text
        this.stat=stat
        this.magnitude=magnitude
    }
    applyeffect(target){
        target.attack(this);
    }
}


const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);
const hardAlgorithm = new Effects('Hard Algorithm', 2, 'Increase target\'s resilience by 3', 'res', '+3');
const unhandledPromiseRejection = new Effects('Unhandled Promise Rejection', 1, 'Reduce target\'s resilience by 2', 'res', '-2');
const pairProgramming = new Effects('Pair Programming', 3, 'Increase target\'s power by 2', 'power', '+2');
// redBeltNinja.attack(hardAlgorithm)
// blackBeltNinja.attack(pairProgramming)

