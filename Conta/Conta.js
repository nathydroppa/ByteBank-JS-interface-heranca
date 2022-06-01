import { Cliente } from "./Cliente.js";

//Classe abstrata só é utilizada para ser herdada e não instanciada
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deve instanciar um objeto do tipo conta, pois ela é uma classe abstrata"); // lançamos um erro toda vez que tentarem usar o Conta
            //Conta foi criada para armazenar todas as operações realizadas no banco em todos tipos de contas, e é utilizada somente para compartilhar código entre elas
        }

        this._saldo = saldoInicial;
        this. _cliente = cliente;
        this. _agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    
    //Método abstrato
    sacar(valor){ //está vazio para poder ser sobrescrito já que cada tipo de conta tem uma taxa especifica de saque
        throw new Error("O método sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}