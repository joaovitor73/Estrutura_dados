import no from "./no";

class lista{
    constructor(){
        this.head = new no();
        this.size = 0;
    }

    add(dado){
        let novoNo = new no(dado);
        if(!this.isEmpty()){
            let aux = this.head.proximo;
            this.head.proximo = novoNo;
            novoNo.proximo = aux;
        }else{
            this.head.proximo = novoNo;
        }
        this.size++;
    }

    append(dado){
        let aux = this.head;
        while(aux.proximo!=null){
            aux = aux.proximo;
        }
        aux.proximo = new no(dado);
        this.size++;
    }

    addAt(dado, posicao){ //Lista começa na posição 1
        if(posicao <= this.length() && posicao>= 1){
            let novoNo = new no(dado);
            let cont = 0;
            let aux = this.head;
            let anterior, posterior;
            while(cont != posicao){
                posterior = aux.proximo;
                anterior = aux;
                aux = aux.proximo;      
                cont++; 
            }
            novoNo.proximo = posterior;
            anterior.proximo = novoNo;
            this.size++;
        }else{
            throw new Error("NullPointerException");
        }
    }

    removeFirst(){
        if(!this.isEmpty()){
            let aux = this.head.proximo;
            let proximoNo = aux.proximo;
            this.head.proximo = proximoNo;
            this.size--;
        }else{
            throw new Error("underflow");
        }
    }

    removeLast(){
        if(!this.isEmpty()){
            let a = this.head;
            let b;
            while(a.proximo!=null){
                b = a;
                a = a.proximo;
            }
            b.proximo = null;
            this.size--;
        }else{
            throw new Error("underflow");
        }
    }
    removeAt(posicao){
        if(!this.isEmpty()){
            if(posicao <= this.length() && posicao>= 1){
                let cont = 0;
                let aux = this.head;
                let anterior, posterior;
                while(cont != posicao){
                    posterior = aux.proximo;
                    anterior = aux;
                    aux = aux.proximo;      
                    cont++; 
                }
                anterior.proximo = posterior.proximo;
                this.size--;
            }else{
                throw new Error("NullPointerException");
            }
        }else{
            throw new Error("underflow");
        }
    }

    isEmpty(){
        return this.head.proximo === null;
    }

    search(dado){
        if(!this.isEmpty()){
            let aux = this.head;
            while(aux.proximo!=null){
                if(dado === aux.dado){
                    return true;
                }
                aux = aux.proximo;
            }
        }else{
            return "Lista vazia";
        }
        return false;
    }

    searchPosicao(posicao){//Falta implementar
        if(!this.isEmpty()){
            if(posicao >= 1 && posicao <= this.length()){
                let aux = this.head.proximo;
                let cont = 0;
                let dado;
                while(cont !== posicao){
                    dado = aux.dado;
                    aux = aux.proximo;
                    cont++;
                }
                return dado;
            }else{
                throw new Error("NullPointerException");
            }
        }else{
            return "Lista vazia";
        }
    }

    length(){
        return this.size;
    }
}

export default lista;