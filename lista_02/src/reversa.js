import Fila from "../../../src/Fila";
let f;
let aux;

const inverter = (value) => {
    if(f.length() !== 0){
        aux = f.front();
        f.dequeue();
        inverter(aux);
    } else
        f.clear();
    f.enqueue(value);
    return;
}

const reversa = (fila) => {
    f = new Fila();
    let cache = "";
    for(let d of fila){
        f.enqueue(d);
    }
    cache = f.front();
    f.dequeue(); 
    inverter(cache);
    let saida = "";
    for(let d of f.dados){
        saida+=d;
    }
    return saida;
}

export default reversa;