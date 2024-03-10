import lista from "../../estruturas/src/lista";
const substring = (listaFunction, start, end) => { //O usuário pensa que a lista começa em 1
    let l = new lista();
    for(let elemento of listaFunction){
        l.append(elemento);
    }
    if((start <= end) && (end < l.length() && (end > 0)) ){
        start-1;
        end-1;
        let listaFinal = new lista();
        while(start <= end){//O caracter final também vai ser incluso
            listaFinal.append(l.searchPosicao(start));
            start++;
        }
        let resposta = "";
        let aux = listaFinal.head.proximo;
        while(aux != null){
            resposta+=aux.dado;
            aux = aux.proximo;
        }
        return resposta;
    }else{
        return "Posições inválidas";
    }
}

export default substring;