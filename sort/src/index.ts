import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([0, 10, 5, -2]);
numbersCollection.sort();

const charactersCollection = new CharactersCollection("VasdxcAww");
charactersCollection.sort();

const linkedList = new LinkedList();
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
