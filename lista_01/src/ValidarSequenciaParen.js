import Pilha from "../../../src/Pilha";

const ValidarSequenciaParen = (dados) => {
    let p = new Pilha();
    for(let d of dados){
        if((d == ')' && p.top() == '(') || (d == ']' && p.top() == '[') && (p.size() >= 1)){
            p.pop();
        }else{
            p.push(d);
        }
    }
    return p.size() === 0;
}
export default ValidarSequenciaParen;