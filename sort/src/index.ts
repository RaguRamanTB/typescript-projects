import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([0, 10, 5, -2]);
const charactersCollection = new CharactersCollection("VasdxcAww");

let sorter = new Sorter(numbersCollection);
sorter.sort();

sorter = new Sorter(charactersCollection);
sorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
