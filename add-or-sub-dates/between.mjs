import { stringDate } from "./utils.mjs";

const start = new Date(stringDate);

const end = new Date(stringDate);
end.setMonth(end.getMonth() + 1);
// end.setMinutes(end.getMinutes() + 30);

const result = end - start;

// ms / s / m / h / d
const days = result / 1000 / 60 / 60 / 24 ;
console.log(days);