import lista from "../Estrutura_dados/estruturas/src/lista";
const ordemNome = (listaFunction) => {
    let l = listaFunction;
    if(l.length() > 1){
       let listaOrdenada = new lista();
       let nomeMenor;
       let indiceNomeMenor;
       let cont;
       let i;
       let aux;
       let chegueiAoFim;
       while(l.length() === 0){
            aux = l.head.proximo;
            nomeMenor = aux.dado;
            while(aux!=null){
                i=0;
                chegueiAoFim = false;
                while(aux.dado[i].toUpperCase().charCodeAt(0) === nomeMenor[i].toUpperCase().charCodeAt(0)){
                    i++;
                    if((i === aux.dado.length || i === nomeMenor.length) && (aux.dado[i].toUpperCase().charCodeAt(0) === nomeMenor[i].toUpperCase().charCodeAt(0))){
                        chegueiAoFim = true;
                    }
                }
                if(chegueiAoFim){
                    if(i == aux.dado.length &&  i !== nomeMenor.length){
                        nomeMenor = aux.dado;
                        indiceNomeMenor = cont;
                    }
                }else{
                    if(aux.dado[i].toUpperCase().charCodeAt(0) < nomeMenor[i].toUpperCase().charCodeAt(0)){
                        nomeMenor = aux.dado;
                        indiceNomeMenor = cont;
                    }
                }
                cont++;
            }
            l.removeAt(indiceNomeMenor);
            listaOrdenada.append(nomeMenor);
       }
    }else{
        return "Existe apenas um elemento na lista";
    }
}

export default ordemNome;