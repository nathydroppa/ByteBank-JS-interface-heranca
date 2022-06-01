import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678955);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Ana", 5000, 55566677799);
gerente.cadastrarSenha("123456");

const cliente = new Cliente("Lais", 123456789102, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);































//import {ContaCorrente} from "./Conta/ContaCorrente.js";
//import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
//import { ContaSalario } from "./Conta/ContaSalario.js";

//const cliente1 = new Cliente("Nathalia", 11122233309);

//const contaCorrenteNathalia = new ContaCorrente (cliente1, 1001);
//const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
//const contaSalario = new ContaSalario(cliente1);
//contaSalario.depositar(100);

//console.log(contaSalario);