var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStings = /** @class */ (function () {
    function ArrayOfStings(collection) {
        this.collection = collection;
    }
    ArrayOfStings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
// console.log(new ArrayOfAnything<string>(["a", "b", "c"]).get(1));
// console.log(new ArrayOfAnything<number>([1, 2, 3]).get(1));
// Example of generics with functions
function printStrings(arr) {
    arr.forEach(function (value) { return console.log(value); });
}
function printNumbers(arr) {
    arr.forEach(function (value) { return console.log(value); });
}
function printAnything(arr) {
    arr.forEach(function (value) { return console.log(value); });
}
// printAnything([1, 2, 3, 4, 5]);
// printAnything(["a", "b", "c", "d", "e"]);
// Generic Constraints
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("I am a car");
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log("I am a house");
    };
    return House;
}());
function printCarsOrHouses(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printCarsOrHouses([new House(), new House()]);
printCarsOrHouses([new Car(), new Car()]);
