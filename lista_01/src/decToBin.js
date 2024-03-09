import pilha from '../../../src/Pilha';
const decToBin = (dados) => {
    let p = new pilha();
    while(dados > 0){
        p.push(dados % 2);
        dados = Math.floor(dados/2);
    }
    let bin = "";
    while(!p.isEmpty()){
        bin += p.top();
        p.pop();
    }
    return bin;
}
export default decToBin;