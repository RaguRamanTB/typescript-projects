import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([0, 10, 5, -2]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
