class Conta {
    #numero
    #titular
    #saldo

    constructor(numero, titular, saldo) {
        this.#numero = numero;
        this.#titular = titular;
        this.#saldo = saldo;
    }

    getNumero() {
        return this.#numero;
    }

    getTitular() {
        return this.#titular;
    }

    getSaldo() {
        return this.#saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} para a conta ${this.#numero} Nome: ${this.#titular} realizado com sucesso!`);
        } else {
            console.log("O valor do depósito deve ser maior do que zero.");
        }
    }

    retirar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} da conta ${this.#numero} Nome: ${this.#titular} realizado com sucesso!`);
        } else if (valor <= this.#saldo) {
            console.log("Saldo insuficiente.");
        } else {
            console.log("Valor inválido.");
        }
    }
    getInfo() {
        return { Numero: this.#numero, Titular: this.#titular, Saldo: this.#saldo };
    }
}
export default Conta;