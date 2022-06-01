import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{   //JS pega tudo que estiver na classe conta e usa na CC
    static numeroDeContas = 0; //conta o número de contas que foi criado
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar;
        }
    }

