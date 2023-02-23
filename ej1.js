// Solicitar tres números al usuario
var num1 = prompt("Ingrese el primer número:");
var num2 = prompt("Ingrese el segundo número:");
var num3 = prompt("Ingrese el tercer número:");

// Convertir los valores de entrada en números
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

// Ordenar los números de mayor a menor
var mayor = Math.max(num1, num2, num3);
var menor = Math.min(num1, num2, num3);
var medio = num1 + num2 + num3 - mayor - menor;

// Mostrar los números ordenados por consola
console.log("De mayor a menor: " + mayor + ", " + medio + ", " + menor);
console.log("De menor a mayor: " + menor + ", " + medio + ", " + mayor);

// Comprobar si los números son iguales y mostrar un mensaje si es así
if (num1 == num2 && num1 == num3) {
  console.log("Los números son iguales.");
}