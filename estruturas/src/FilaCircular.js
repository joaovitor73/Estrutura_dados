class FilaCircular {
    constructor(capacidade = 5) {
        this.capacidade = capacidade;
        this.inicio = 0;
        this.fim = 0;
        this.dados = [];
    }
    enqueue(dado) { 
        if(!this.isFull()){
            this.dados[this.fim] = dado;
            if(this.fim ===  this.capacidade-1){
                this.fim = 0;
            }else{
                this.fim++;
            }
            return;
        }
        throw new Error("Queueoverflow");
    }
    dequeue() {
        if(!this.isFull()){
            if(this.inicio ===  this.capacidade-1){
                this.inicio = 0;
            }else{
                this.inicio++;
            }
            return;
        }
        throw new Error("Queueunderflow");
     }

    front() { 
        if(!this.isFull()){
            return this.dados[this.inicio];
        }
        throw new Error("queue empty");
    }
    isEmpty() {
        return this.inicio === this.fim;
    }
    isFull() {
        return (this.length() === this.capacidade) || ( this.fim == this.inicio+1);
    }
    clear() { 
        this.inicio = 0;
        this.fim = 0;
    }
    toString() {
        let resposta = "";
        if(this.inicio < this.fim){
            for(let i = this.inicio; i <= this.fim; i++){
                resposta+=this.dados[i];
            }
        }else{
            for(let i = this.inicio; i < this.capacidade; i++){
                resposta+=this.dados[i];
            }
            if(this.fim!=0){
                for(let i = this.fim; i < this.inicio; i++){
                    resposta+=this.dados[i];
                }
            }
        }
        return resposta;
     }
    length() {
        if (this.inicio < this.fim) {
            return this.fim - this.inicio;
        } else if (this.inicio > this.fim) {
            return this.capacidade - this.inicio + this.fim + 1;
        }
        return 0;
    }
}

export default FilaCircular;