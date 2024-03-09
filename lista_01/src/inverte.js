import Pilha from "../../../src/Pilha";
const inverte = (dados) => {
    let p = new Pilha();
    for(let d of dados){
        p.push(d);
    }
    let saida = "";
    while(!p.isEmpty()){
        saida+=p.top();
        p.pop();
    }
    return saida;
}

export default inverte;