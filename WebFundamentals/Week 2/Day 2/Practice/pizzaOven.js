function pizzaOven(crusttype,sauce,cheese,toppings){
    var pizza={};
    pizza.crustType=crusttype;
    pizza.sauce=sauce;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;

}


console.log(pizzaOven("deep dish","traditional","mozzarella",["peporoni","sausage"]));
console.log(pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]));


let pizza2=pizzaOven("deep dish","traditional","mozzarella",["peporoni","sausage"]);
let pizza3=pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);











function randompizza(crusttype,sauce,cheese,toppings){
    var pizza={};
    pizza.crusttype=crusttype[Math.floor(Math.random()*((crusttype.length)-1))];
    pizza.sauce=sauce[Math.floor(Math.random()*((sauce.length)-1))];
    pizza.cheese=cheese[Math.floor(Math.random()*((cheese.length)-1))];
    pizza.toppings=toppings[Math.floor(Math.random()*((toppings.length)-1))];
    return pizza;
}


console.log(randompizza(["deep dish","hand tossed","bread","wheat"],["traditional","marinara","tomato"],["peporoni","sausage","feta"],["mushrooms","olives","onions"]));