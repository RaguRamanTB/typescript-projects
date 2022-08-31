// Object
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Array
const pepsiArray = ["brown", true, 40];

// Tuple
const pepsiTuple: [string, boolean, number] = ["brown", true, 40];
pepsiTuple[0] = 40;

// Type Alias For Tuple
type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];
// The above tuple doesn't mean anything about the number.
// As engineers we cannot know which number corresponds to what key.
// Hence, tuples are used only at specific usecases like processing CSV, etc.
// At all other instances, JS Object is much more clear than tuples.

const carStats = {
  horsePower: 400,
  weight: 3354,
};
