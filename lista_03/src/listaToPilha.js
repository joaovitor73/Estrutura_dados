import lista from "../../estruturas/src/lista";
class listaToPilha{
    constructor(){
        this.lista = new lista();
    }

    push(dado){
        this.lista.append(dado);
    }

    pop(){
        if(!this.isEmpty()){
            this.lista.removeLast();
            return;
        }
        throw new Error("stackunderflow");
    }

    top(){
        if(!this.isEmpty()){
            let aux = this.lista.head;
            while(aux.proximo != null){
                aux = aux.proximo;
            }
            return aux.dado;
        }
        throw new Error("stack empty");
    }

    isEmpty(){
       return this.lista.isEmpty();
    }

    size(){
        return this.lista.size();
    }

    clear(){
        this.lista.head.proximo = null;
        this.lista.size = 0;
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

export default listaToPilha;