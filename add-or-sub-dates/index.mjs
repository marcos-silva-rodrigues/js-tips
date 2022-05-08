import { formatDate, stringDate } from "./utils.mjs";

// Normal
// const date = new Date(stringDate);
// date.setDate(date.getDate() + 15);

// Prototype
// Date.prototype.addDays = function (days) {
//   this.setDate(this.getDate() + days);
// }
// date.addDays(15);

// Class
export class MyDate extends Date {
  addDays(days) {
    this.setDate(this.getDate() + days);
  }
}
const date = new MyDate(stringDate);
date.addDays(15);

console.log(formatDate(date));