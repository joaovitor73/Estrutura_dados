import lista from "../../estruturas/src/lista";
const reverse = (listaFunction) => {
    let l = new lista();
    for(let elemento of listaFunction){
        l.append(elemento);
    }

    let cont = 1;
    let aux;
    while(cont < l.size()){
        aux = l.searchPosicao(l.size()-1);
        l.removeLast();
        l.add(aux);
        cont++;
    }
    let resposta = "";
    aux = l.head.proximo;
    while(aux != null){
        resposta+=aux.dado;
        aux = aux.proximo;
    }
    return resposta;
} 

export default reverse;