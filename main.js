var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
    var operacion = prompt("Elija una operación: suma, resta, multiplicación o división");

  switch (operacion.toLowerCase()) {
    case "suma":
      var resultado = numero1 + numero2;
      break;
    case "resta":
      var resultado = numero1 - numero2;
      break;
    case "multiplicacion":
      var resultado = numero1 * numero2;
      break;
    case "division":
      if (numero2 !== 0) {
        var resultado = numero1 / numero2;
      } else {
        var resultado = "No se puede dividir por cero";
      }
      break;
    default:
      var resultado = "Operación no válida";
      break;
  }

  alert("El resultado de la " + operacion + " es: " + resultado);
} else {
  alert("Por favor, ingrese números válidos.");
}