import Fila from "../../estruturas/src/Fila";
class dequeue{
    constructor(capacidade = 5){
        this.capacidade = capacidade;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
    }
    enqueue(dado) {
        if (!this.isFull()) {
            this.dados[this.fim++] = dado;
            return;
        }
        throw new Error("Queueoverflow");
    }
    dequeue() {
        if (!this.isEmpty()) {
            this.inicio++;
            return;
        }
        throw new Error("Queueunderflow");
    }

    enqueueHead(dado) {
        if (!this.isFull()) {
            let filaAux = new Fila();
            while(!this.isEmpty()){
                filaAux.enqueue(this.front());
                this.dequeue();
            }
            this.clear();
            this.enqueue(dado);
            while(!filaAux.isEmpty()){
                this.enqueue(filaAux.front());
                filaAux.dequeue();
            }     
            return;                                                                             
        }
        throw new Error("Queueoverflow");
    }
    dequeueTail() {
        if (!this.isEmpty()) {
            let filaAux = new Fila();
            while(this.length() > 1){
                filaAux.enqueue(this.front());
                this.dequeue();
            }
            this.clear();
            while(!filaAux.isEmpty()){
                this.enqueue(filaAux.front());
                filaAux.dequeue();
            }
            return;
        }
        throw new Error("Queueunderflow");
    }
    front() {
        if (!this.isEmpty()) {
            return this.dados[this.inicio];
        }
        throw new Error("empty queue");
    }
    clear() {
        this.inicio = 0;
        this.fim = 0;
    }
    isEmpty() {
        return this.inicio === this.fim;
    }
    isFull() {
        return this.length() === this.capacidade;
    }
    length() {
        return this.fim - this.inicio;
    }
    toString() {
        let resultado = '';
        for (let i = this.inicio; i < this.fim; i++) {
            resultado += this.dados[i];
        }
        return resultado;
    }
}

export default dequeue;