
class vetor{
    constructor(tam = 10){
        this.tam = tam;
        this.dados = [];
        this.topA = 0;
        this.topB = this.tam-1;
    }

    empilhaA(dados){
        if(!this.isFull()){
            this.dados[this.topA++] = dados;
            return;
        }
        throw new Error("stackoverflow");
    }

    empilhaB(dados){
        if(!this.isFull()){
            this.dados[this.topB--] = dados;
            return;
        }
        throw new Error("stackoverflow");
    }

    isFull(){
        return (this.topA-1)-(this.topB+1) === 1 || (this.topA-1)-(this.topB+1) === -1 ; //Inclui tanto o 1 quanto o -1 
    }

    desempilhaA(){
        if(!this.eVaziaA()){
            this.dados[--this.topA] = undefined;
            return;
        }
        throw new Error("stackunderflow");
    }   

    desempilhaB(){
        if(!this.eVaziaB()){
            this.dados[this.topB++] = undefined;
            return;
        }
        throw new Error("stackunderflow");
    } 

    eVaziaA(){
        return this.topA === 0;
    }

    eVaziaB(){
        return this.topA === this.tam-1;
    }

    toString(){
        let saida = "";
        for(let i = 0; i < this.topA; i++){
            saida+=this.dados[i];
        }

        for(let i = this.topB+1; i < this.tam; i++){
            saida+=this.dados[i];
        }
    
        return saida;
    }
}

export default vetor;