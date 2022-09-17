import { User } from "./models/User";

const user = new User({ name: "Ragu", age: 22 });

user.on("change", () => {});
user.on("change", () => {});
user.on("sample", () => {});

console.log(user);
