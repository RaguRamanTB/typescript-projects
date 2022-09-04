class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {}
}

const sorter = new Sorter([0, 10, 5, -2]);
sorter.sort();
console.log(sorter.collection);
