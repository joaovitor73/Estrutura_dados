import lista from "../../estruturas/src/lista";
const listaOrdemAleatoria = (listaFunction) => {
    let l = new lista();
    for(let elemento of listaFunction){
        l.append(elemento);
    }
    let cont = 0;
    let elemento, posicao;
    while(cont < l.length()){
        posicao = Math.floor(Math.random() * ((l.length()-1) - 1 + 1)) + 1;
        elemento = l.searchPosicao(posicao);
        l.removeAt(posicao);
        l.add(elemento);
        cont++;
    }
    let resposta = "";
    let aux = l.head.proximo;
    while(aux != null){
        resposta+=aux.dado;
        aux = aux.proximo;
    }
    return resposta;
}

export default listaOrdemAleatoria;