const [a, b, c] = ['Luiz', false, ''];

console.log(a || b || c);

const defaultColor = 'black';
const userColor = null || defaultColor;

console.log(userColor);