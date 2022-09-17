class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

console.log(new ArrayOfAnything<string>(["a", "b", "c"]).get(1));
console.log(new ArrayOfAnything<number>([1, 2, 3]).get(1));

// Example of generics with functions

function printStrings(arr: string[]): void {
  arr.forEach((value) => console.log(value));
}

function printNumbers(arr: number[]): void {
  arr.forEach((value) => console.log(value));
}

function printAnything<T>(arr: T[]): void {
  arr.forEach((value) => console.log(value));
}

printAnything([1, 2, 3, 4, 5]);
printAnything(["a", "b", "c", "d", "e"]);
