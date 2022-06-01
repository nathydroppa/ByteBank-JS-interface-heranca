/* 
Ser autenticavel significa ter o metodo "autenticar"
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){ //metodo ehautenticavel vai receber alguém autenticavel e precisamos saber se esse tem o metodo autenticar dentro dele
       return "autenticar" in autenticavel //verifica se a chave autenticar existe dentro do objeto autenticavel, se sim vai retornar verdadeiro
        && autenticavel.autenticar instanceof Function //a chave autenticavel deve estar dentro de autenticar e ser uma instancia de uma função
    }
}
