import Pilha from "../../../src/Pilha";
const trocaBaseTopoPilha = (dados) => {
    let p = new Pilha();
    let pAux = new Pilha();
    let pFinal = new Pilha();
    for(let d of dados){
        p.push(d);
    }
    pFinal.push(p.top());
    p.pop();
    while(p.size() > 1){
        pAux.push(p.top());
        p.pop();
    }
    while(!pAux.isEmpty()){
        pFinal.push(pAux.top());
        pAux.pop();
    }
    pFinal.push(p.top());
    
    return pFinal.dados;
}

export default trocaBaseTopoPilha;