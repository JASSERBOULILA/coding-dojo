// 1 after the rewrite the output will be word
var hello; 
console.log(hello);
hello='world'; 


// code snippet 2  the predict will be magnet
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// code snippet 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);//the output will be the first value of brendan which is super cool

// the code snippet 4
var food = 'chicken';
console.log(food);//the output chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);//half-chicken
    var food = 'gone';
}

// the code snippet 5
mean(); //mean is not a function
console.log(food); // food is not defined
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}

console.log(food); //food is not defined

// 6
console.log(genre); // Output: undefined
var genre = "disco";

rewind();

function rewind() {
    genre = "rock";
    console.log(genre); // the output: rock
    var genre = "r&b";
    console.log(genre); // the output: r&b
}

console.log(genre); // the output: disco


// 7
dojo = "san jose";
console.log(dojo); //the output: san jose

learn();

function learn() {
    dojo = "seattle";
    console.log(dojo); // the output: seattle
    var dojo = "burbank";
    console.log(dojo); // the output: burbank
}

console.log(dojo); // the output: seattle

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;

    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now"; // you cant change resigne a constant variable
    }

    return dojo;
}












