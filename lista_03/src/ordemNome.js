import lista from "../../estruturas/src/lista";
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
            cont = 1;
            indiceNomeMenor = 1;
            while(aux!=null){
                i=0;
                chegueiAoFim = false;
                while(aux.dado[i].toUpperCase().charCodeAt(0) === nomeMenor[i].toUpperCase().charCodeAt(0)){
                    i++;
                    if((i === aux.dado.length || i === nomeMenor.length) && (aux.dado[i-1].toUpperCase().charCodeAt(0) === nomeMenor[i-1].toUpperCase().charCodeAt(0))){
                        chegueiAoFim = true;
                        break;
                    }
                }
                if(chegueiAoFim){
                    if(i == aux.dado.length &&  i !== nomeMenor.length){
                        nomeMenor = aux.dado;
                        indiceNomeMenor = cont;
                    }
                }else{
                    console.log("Letras diferentes" + " " + nomeMenor + " " + aux.dado)
                    if(aux.dado[i].toUpperCase().charCodeAt(0) < nomeMenor[i].toUpperCase().charCodeAt(0)){
                        console.log(nomeMenor + " " + aux.dado + " " + chegueiAoFim + " " + l.length() + " " + cont + " " +aux.dado[i].toUpperCase().charCodeAt(0) + " " + nomeMenor[i].toUpperCase().charCodeAt(0) + " " + aux.dado[i] + " " + nomeMenor[i]);
                        nomeMenor = aux.dado;
                        indiceNomeMenor = cont;
                    }
                }
                console.log(indiceNomeMenor + " " + nomeMenor);
                cont++;
                aux = aux.proximo;
            }
            console.log("estou fora " + l.searchPosicao(indiceNomeMenor));
            console.log(indiceNomeMenor);
            l.removeAt(indiceNomeMenor);
            listaOrdenada.append(nomeMenor);
       }
       let resposta = "";
        aux = listaOrdenada.head.proximo;
        while(aux !== null){
            resposta+=aux.dado + " ";
            aux = aux.proximo;
        }
        return resposta;
    }else{
        return "Existe apenas um elemento na lista";
    }
}

export default ordemNome;