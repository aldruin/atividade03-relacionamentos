//testes
import AgenciaBancaria from "./agencia.js";
import Conta from "./conta.js";

//instanciando nova agencia
const agencia = new AgenciaBancaria(1234);

//instanciando nova conta
const novaConta = new Conta(1, "Aldruin Souza", 1000);
const novaCont = new Conta(2, "Juliano Campos", 950);

//adicionando conta à agência pela função addConta
agencia.addConta(novaConta);
agencia.addConta(novaCont);

//obtendo conta da agência pelo metodo getConta e passando como parametro o numero das respectivas contas
// let arrayContas = [];

// const conta = agencia.getConta(1);
// const conta2 = agencia.getConta(2);

// arrayContas.push(conta, conta2);

// console.table(arrayContas);
//obtendo lista de todas as contas cadastradas na agência, pelo metodo listContas

console.log("Lista de contas:");
console.table(agencia.listContas());

//efetuando saque da conta criada, utilizando método retirar e passando como parametro 300 (valor a ser sacado)
novaConta.retirar(300);
console.log("Conta após o saque:");
console.table([novaConta.getInfo()]);

//depositando 2000 na conta
novaConta.depositar(2000);
console.log("Conta após o depósito:");
console.table([novaConta.getInfo()]);

novaCont.retirar(100);
console.log("Conta após o saque:");
console.table([novaCont.getInfo()]);

novaCont.depositar(150);
console.log("Conta após o depósito:");
console.table([novaCont.getInfo()]);