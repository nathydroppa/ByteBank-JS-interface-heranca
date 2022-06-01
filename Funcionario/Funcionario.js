export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha; //cada funcionário terá que colocar a sua senha no sistema de autenticação
    }

    autenticar(senha){
        return senha == this._senha;
    }
    
    cadastrarSenha(senha){        //este método cadastra a senha do funcionário e atribui a informação ao
        this._senha = senha;      // this.senha
    }
}