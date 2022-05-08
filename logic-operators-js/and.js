const [a, b, c] = [true, 'Luiz', 1];
const nome = 'Luiz';
const sobrenome = '';

function falaNome() {
  console.log(nome + ' ' + sobrenome);
}

nome && sobrenome && falaNome();
console.log(a && b && c);