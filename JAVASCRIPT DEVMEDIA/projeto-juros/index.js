import input from "readline-sync";

let valorDevido = input.question("Digite o valor devido: ");
let diasVencido = input.question(
  "Digite o número de dias passados desde o vencimento: "
);
let juros = "";
let dividaFinal = "";

if (valorDevido > 0) {
  if (diasVencido <= 15) {
    juros = "5%";
    dividaFinal = number((valorDevido * 0.05)) + number(valorDevido);
  } else if (diasVencido == 0) {
    console.log("Você está em dia!");
  } else {
    juros = "10%";
    dividaFinal = number((valorDevido * 0.1)) + number(valorDevido);
  }
} else {
  console.log("o valor da dívida deve ser maior que zero!");
}

console.log("\nValor original da dívida: R$ " + valorDevido);
console.log("Dias de atraso: " + diasVencido);
console.log("Taxa de juros: " + juros);
console.log("Valor total da dívida: R$ " + dividaFinal);
