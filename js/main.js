
const nombres = prompt("Ingrese nombres:").split(" ");
nombres.forEach(nombre => {
  console.log(`¡Hola ${nombre}!`);
});

const numeros = prompt("Ingrese números:").split(" ").map(Number);
const menor = Math.min(...numeros);
console.log(`El menor número es: ${menor}`);

const Sumnumeros = prompt("Ingrese números:").split(" ").map(Number);
const suma = Sumnumeros.reduce((acc, num) => acc + num, 0);
console.log(`La suma de todos los números es: ${suma}`);
