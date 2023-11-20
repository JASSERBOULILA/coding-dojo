function alwyasHungry(arr) {
    let hasFood = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            hasFood = true;
        }
    }

    if (!hasFood) {
        console.log("I'm hungry");
    }
}

// Example usage:
// const myArray = [3.14, "food", "pie", true, "food"];
const myArray = [4, 1, 5, 7, 2]
alwyasHungry(myArray);


function highPass(arr, cutoff) {
    return arr.filter((value) => value > cutoff);
}

const newArray = [10, 5, 15, 7, 20];
const cutoffValue = 10;
const filteredArray = filterArrayByCutoff(newArray, cutoffValue);
console.log(filteredArray);


function betterThanAverage(arr) {
    var sum = 0;
    // Calculate the sum of all numbers in the array
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Calculate the average
    var average = sum / arr.length;

    var count = 0;
    // Count how many values are greater than the average
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }

    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // This will output 4


function reverseArray(arr) {
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

var originalArray = ["a", "b", "c", "d", "e"];
var reversedArray = reverseArray(originalArray);
console.log(reversedArray);