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
