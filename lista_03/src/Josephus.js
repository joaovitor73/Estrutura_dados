import lista from "../../estruturas/src/lista";

const Josephus = (n,d) => {
    if(n > 0 ){
        if(d < n && n > 0){
            let l = new lista();
            for(let i = 1; i<=n;i++){
                l.append(i);
            }
            let listaMortes = new lista();
            let morteVez, cont=1, pulos = 0;
            while(l.length()!=1){
                if(pulos===d){
                    morteVez = l.searchPosicao(cont);
                    l.removeAt(cont);
                    listaMortes.append(morteVez);
                    pulos=0;
                }
                pulos++;
                if(cont > l.length()){
                    cont=1;
                    pulos--;
                }else{
                    cont++;
                }
            }
            let resposta = "";
            let aux = listaMortes.head.proximo;
            while(aux != null){
                resposta+=aux.dado;
                aux = aux.proximo;
            }
            resposta+=l.searchPosicao(1);
            return resposta;
        }else{
            return "O número de remoções precisa ser menor que o número de participantes ou maior que 0";
        }
    } else{
        return "Prica de no mínimo um participante";
    }
}

export default Josephus;