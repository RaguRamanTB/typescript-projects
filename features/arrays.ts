const carMakers = ["ford", "toyota", "bmw", "benz"];
const emptyArray: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["x1"], ["e250"]];
const empty2DArray: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), "2030-10-10"];

// Overriding type inference
const arrayTypeOverriding: (Date | string | number)[] = [];
arrayTypeOverriding.push("2030-10-10");
arrayTypeOverriding.push(new Date());
