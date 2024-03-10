import lista from "../Estrutura_dados/estruturas/src/lista";
class listaToFila{
    constructor(){
        this.lista = new lista();
    }

    enqueue(dado){
        this.lista.append(dado);
    }

    dequeue(){
        if(!this.isEmpty()){
            this.lista.removeFirst();
            return;
        }
        throw new Error("Enqueue empty");
    }

    front(){
        if(!this.isEmpty()){
            let aux = this.lista.head.proximo;
            return aux.dado;
        }
        throw new Error("Enqueue empty");
    }

    length(){
        return this.lista.length();
    }

    clear(){
        this.lista.head.proximo = null;
        this.lista.size = 0;
    }

    isEmpty(){
        return this.lista.isEmpty();
    }

    toString(){ 
        let resposta = "";
        let aux = this.lista.head.proximo;
        while(aux != null){
            resposta+=aux.dado;
            aux = aux.proximo;
        }
        return resposta;
    }
}

export default listaToFila;