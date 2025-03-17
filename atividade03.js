//professor fiquei com duvida sobre o diagrama, pois ele define tipos para os atributos de entidades
//porém em js não usamos tipos, então deixei por assim mesmo

class AgenciaBancaria{
  //o uso de # define o atributo como privado
  codigo
  contas

  //construtor, passando como parametro o codigo da agencia bancaria, e criando no ato de instanciamento do objeto uma lista de contas, atribuindo ao atributo contas.
  constructor(codigo){
    this.codigo = codigo;
    this.contas = [];
  }


  //metodo para adicionarConta ao objeto AgenciaBancaria.
  //validação para verificar se conta é uma instanciação do objeto Conta, para garantir que não seja uma conta falsa.
  addConta(conta){
    if (conta instanceof Conta){
      this.contas.push(conta);
      console.log(`Conta número ${conta.numero} adicionada.`);
    } else{
      console.log(`O objeto não é uma instância de Conta, não foi possivel adiciona-lo.`);
    }
  }

  //metodo getter para obter a conta baseado no numero de conta desejado.
  getConta(numero){
    return this.contas.find(conta=> conta.numero === numero);
  }


  //metodo para obter todas as contas da agencia bancaria, ele obtem a conta e retorna os atributos como numero, titular e saldo.
  listContas(){
    return this.contas.map(conta => `Número: ${conta.numero}, Titular: ${conta.titular}, Saldo: R$${conta.saldo}`);
  }


}



class Conta{
  numero
  titular
  saldo

  constructor (numero, titular, saldo){
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor){
    if (valor > 0){
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso!`);
    } else{
      console.log("O valor do depósito deve ser maior do que zero.")
    }
  }

  retirar(valor){
    if (valor > 0 && valor <=this.saldo){
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso!`);
    } else if(valor <= this.saldo){
      console.log('Saldo insuficiente.');
    } else{
      console.log('Valor inválido.');
    }
  }
}


//testes

//instanciando nova agencia
const agencia = new AgenciaBancaria(1234);

//instanciando nova conta
const novaConta = new Conta(1, "Aldruin Souza", 1000);


//adicionando conta à agência pela função addConta
agencia.addConta(novaConta);

//obtendo conta da agência pelo metodo getConta e passando como parametro o numero de conta 1
conta = agencia.getConta(1);
console.log(conta);


//obtendo lista de todas as contas cadastradas na agência, pelo metodo listContas
listaDeContas = agencia.listContas();

console.log(`Lista de Contas: ${listaDeContas}`);


//efetuando saque da conta criada, utilizando metodo retirar e passando como parametro 300 (valor a ser sacado)
novaConta.retirar(300);

console.log(novaConta);

//depositando 2000 na conta
novaConta.depositar(2000);

console.log(novaConta);