"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() { }
}
const sorter = new Sorter([0, 10, 5, -2]);
sorter.sort();
console.log(sorter.collection);
