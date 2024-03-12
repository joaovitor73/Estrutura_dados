import lista from "../Estrutura_dados/estruturas/src/lista";
const ordemNome = (listaFunction) => {
    let l = listaFunction;
    if(l.length() > 1){
       let listaOrdenada = new lista();
       let nomeMenor = "";
       let indiceNomeMenor;
       let cont;
       let i;
       let aux;
       let chegueiAoFim;
       while(l.length() !== 0){
            aux = l.head.proximo;
            nomeMenor = aux.dado;
            while(aux!=null){
                i=0;
                cont = 1;
                chegueiAoFim = false;
                while(aux.dado[i].toUpperCase().charCodeAt(0) === nomeMenor[i].toUpperCase().charCodeAt(0)){
                    i++;
                    if((i === aux.dado.length || i === nomeMenor.length) && (aux.dado[i-1].toUpperCase().charCodeAt(0) === nomeMenor[i-1].toUpperCase().charCodeAt(0))){
                        chegueiAoFim = true;
                        break;
                    }
                }
                console.log(nomeMenor + " " + aux.dado + " " + chegueiAoFim);
                if(chegueiAoFim){
                    if(i == aux.dado.length &&  i !== nomeMenor.length){
                        nomeMenor = aux.dado;
                        indiceNomeMenor = cont;
                    }
                }else{
                    console.log("Letras diferentes")
                    if(aux.dado[i].toUpperCase().charCodeAt(0) < nomeMenor[i].toUpperCase().charCodeAt(0)){
                        nomeMenor = aux.dado;
                        indiceNomeMenor = cont;
                    }
                }
                cont++;
                aux = aux.proximo;
            }
            console.log(indiceNomeMenor);
            l.removeAt(indiceNomeMenor);
            listaOrdenada.append(nomeMenor);
       }
       console.log("lista Ordenada")
       for(let i = 1; i <= listaOrdenada.length(); i++){
            console.log(listaOrdenada.searchPosicao(i) + " " + i + "\n" );
       }
       return listaOrdenada;
    }else{
        return "Existe apenas um elemento na lista";
    }
}

export default ordemNome;
