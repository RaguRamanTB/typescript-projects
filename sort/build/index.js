"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([0, 10, 5, -2]);
numbersCollection.sort();
const charactersCollection = new CharactersCollection_1.CharactersCollection("VasdxcAww");
charactersCollection.sort();
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(43);
linkedList.add(1243);
linkedList.add(0);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(-43);
linkedList.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
