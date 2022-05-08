const person = {
  firstname: "Luiz",
  lastname: "Miranda",
  address: {
    line1: "Av. Brasil",
    line2: "Centro",
  },
};

// Referência
// const person2 = person;

// Copia
// props de objetos são passados por referencia
// const person2 = { ...person };

// Copia com json
const person2 = JSON.parse(JSON.stringify(person));

// Inserir novas prop com Object
Object.defineProperty(person, 'age', {
  enumerable: false, // não lista a key
  configurable: true,
  value: 80,
  writable: true
});
console.log(Object.keys(person));

person2.firstname = "João";
person2.address.line2 = "interior";

console.log(person, person2);


