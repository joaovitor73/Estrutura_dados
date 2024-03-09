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

    addAt(dado, posicao){
        this.size++;
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
        this.size--;
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
            throw new Error("underflow");
        }
        return false;
    }

    length(){
        return this.size;
    }
}

export default lista;