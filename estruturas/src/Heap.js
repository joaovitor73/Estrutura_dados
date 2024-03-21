import Node from "./Node";
class heap{
    constructor(){
        this.tree = [];
        this.tree[0] = new Node(0,9999999);
        this.size = 0;
    }

    insert(data, priority){
        let novoNo = new Node(data, priority);
        this.tree[++this.size] = novoNo;
        let indicePai = parseInt(this.size/2);
        let indiceFilho = this.size;
        while(this.tree[indiceFilho].priority > this.tree[indicePai].priority){
            let aux = this.tree[indicePai];
            this.tree[indicePai] = this.tree[indiceFilho];
            this.tree[indiceFilho] = aux;
            indiceFilho = indicePai;
            indicePai = parseInt(indiceFilho/2);
        }
    }

    remove(){
        this.tree[1] = this.tree[this.size];
        this.size--;
        let indicePai = 1;
        let aux;        
        let filhoVezIndice;
        if(this.tree[indicePai*2+1].priority > this.tree[indicePai*2].priority){
            filhoVezIndice = this.tree[indicePai*2+1];
        }else{
            filhoVezIndice = this.tree[indicePai*2];
        }
        while(this.tree[indicePai] < this.tree[filhoVezIndice]){
            aux = this.tree[filhoVezIndice];
            this.tree[filhoVezIndice] = this.tree[indicePai];
            this.tree[indicePai] =  aux;
            indicePai = filhoVezIndice;
            if((this.tree[indicePai*2+1].priority > this.tree[indicePai*2].priority) && (indicePai*2+1 <= this.size) && (indicePai*2 <= this.size)){
                filhoVezIndice = this.tree[indicePai*2+1];
            }else{
                filhoVezIndice = this.tree[indicePai*2];
            }
        }
    }

}

export default heap;
