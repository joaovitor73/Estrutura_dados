import Pilha from "../../../src/Pilha";
class pilhasEmFila{
    constructor(tam = 5){
        this.pilhaA = new Pilha(tam);
        this.pilhaB = new Pilha(tam);
    }

    enqueue(dado) {
        if (!this.isFull()) {
            this.pilhaA.push(dado);
            return;
        }
        throw new Error("Queueoverflow");
    }
    dequeue() {
      
        if (!this.isEmpty()) {
            while(this.pilhaA.size() > 1){
                this.pilhaB.push(this.pilhaA.top());
                this.pilhaA.pop();
            }
            this.pilhaA.clear();
            while(this.pilhaB.size() > 0){
                this.pilhaA.push(this.pilhaB.top());
                this.pilhaB.pop();
            }
            return;
        }
        throw new Error("Queueunderflow");
    }
    front() {
        if (!this.isEmpty()) {
            return this.pilhaA.dados[this.pilhaA.size()-1];
        }
        throw new Error("empty queue");
    }
    clear() {
        this.pilhaA.clear();
    }
    isEmpty() {
        return this.pilhaA.isEmpty();
    }
    isFull() {
        return this.pilhaA.isFull();
    }
    length() {
        return  this.pilhaA.size();
    }
    toString() {
        return this.pilhaA.toString();
    }
}

export default pilhasEmFila;