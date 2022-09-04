import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([0, 10, 5, -2]);
const charactersCollection = new CharactersCollection("VasdxcAww");
const linkedList = new LinkedList();
linkedList.add(43);
linkedList.add(1243);
linkedList.add(0);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(-43);

let sorter = new Sorter(numbersCollection);
sorter.sort();

sorter = new Sorter(charactersCollection);
sorter.sort();

sorter = new Sorter(linkedList);
sorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
