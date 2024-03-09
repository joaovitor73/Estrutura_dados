import Fila from "../../../src/Fila";
class filasEmPilha{
    constructor(capacidade = 5){
        this.filaA = new Fila(capacidade);
        this.filaB = new Fila(capacidade);
    }

    push(dados){
        if(!this.isFull()){
            this.filaA.enqueue(dados);
            return;
        }
        throw new Error("stackoverflow");
    }

    pop(){
        if(!this.isEmpty()){
            while(this.filaA.length() > 1){
                this.filaB.enqueue(this.filaA.front());
                this.filaA.dequeue();
            }
            this.filaA.clear();
            while(this.filaB.length() > 0){
                this.filaA.enqueue(this.filaB.front());
                this.filaB.dequeue();
            }
            console.log(this.filaA.length());
            return;
        }
        throw new Error("stackunderflow");
    }

    isEmpty(){
        return this.filaA.isEmpty();
    }

    isFull(){
        return this.filaA.isFull();
    }

    top() {
        if (!this.isEmpty()) {
            return this.filaA.dados[this.filaA.length()-1];
        }
        throw new Error("Empty stack");
    }
    clear() {
        this.filaA.clear();
    }
    size() {
        return this.filaA.length();
    }
    toString() {
        return this.filaA.toString();
    }
}
export default filasEmPilha;