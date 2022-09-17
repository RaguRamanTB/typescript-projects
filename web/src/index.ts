import { User } from "./models/User";

const user = new User({ name: "Ragu", age: 22 });

user.set({ name: "Aakash", age: 50 });
user.set({ age: 25 });

console.log(user.get("name"));
console.log(user.get("age"));
