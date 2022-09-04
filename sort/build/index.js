"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const sorter = new Sorter_1.Sorter([0, 10, 5, -2]);
sorter.sort();
console.log(sorter.collection);
