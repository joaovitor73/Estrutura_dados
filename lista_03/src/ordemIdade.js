import lista from "../../estruturas/src/lista";
const ordemIdade = (listaFunction) => {
    let l = listaFunction;
    if(l.length() > 1){
        let listaOrdenada = new lista();
        let menorIdade;
        let indiceMenorIdade;
        let aux;
        let cont;
        while(l.length() !== 0){
            aux = l.head.proximo;
            menorIdade = aux.dado;
            indiceMenorIdade = 1;
            cont = 1;
            while(aux !== null){
                if(menorIdade > aux.dado){
                    indiceMenorIdade = cont;
                    menorIdade = aux.dado;
                }
                aux = aux.proximo;
                cont++;
            }
            l.removeAt(indiceMenorIdade);
            listaOrdenada.append(menorIdade);
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

export default ordemIdade;