  //professor fiquei com duvida sobre o diagrama, pois ele define tipos para os atributos de entidades
//porém em js não usamos tipos, então deixei por assim mesmo

import Conta from "./conta.js";

class AgenciaBancaria {
  //o uso de # define o atributo como privado
  #codigo
  #contas

  //construtor, passando como parametro o codigo da agencia bancaria, e criando no ato de instanciamento do objeto uma lista de contas, atribuindo ao atributo contas.
  constructor(codigo) {
    this.#codigo = codigo;
    this.#contas = [];
  }

  //metodo para adicionarConta ao objeto AgenciaBancaria.
  //validação para verificar se conta é uma instanciação do objeto Conta, para garantir que não seja uma conta falsa.
  addConta(conta) {
    if (conta instanceof Conta) {
      this.#contas.push(conta);
      console.log(`Conta número ${conta.getNumero()} adicionada.`);
      console.table([{
        Numero: conta.getNumero(),
        Titular: conta.getTitular(),
        Saldo: conta.getSaldo()
      }]);
    } else {
      console.log(`O objeto não é uma instância de Conta, não foi possivel adiciona-lo.`);
    }
  }

  //metodo getter para obter a conta baseado no numero de conta desejado.
  getConta(numero) {
    return this.#contas.find(conta => conta.getNumero() === numero);
  }

  //metodo para obter todas as contas da agencia bancaria, ele obtem a conta e retorna os atributos como numero, titular e saldo.
  listContas() {
    return this.#contas.map(conta => ({
      Numero: conta.getNumero(),
      Titular: conta.getTitular(),
      Saldo: conta.getSaldo()
    }));
  }
}


export default AgenciaBancaria;