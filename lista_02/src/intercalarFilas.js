import Fila from "./Fila";
const intercalarFilas = (fila1, fila2) => {
    let f1 = new Fila();
    let f2 = new Fila();
    let f = new Fila();
    
    for(let i of fila1){
        f1.enqueue(i);
    }
    for(let i of fila2){
        f2.enqueue(i);
    }
    while(!f1.isEmpty() || !f2.isEmpty()){
        if(!f1.isEmpty()){
            f.enqueue(f1.front());
            f1.dequeue();
        }
        if(!f2.isEmpty()){      
            f.enqueue(f2.front());
            f2.dequeue();
        }
    }
    let saida = "";
    for(let d of f.dados){
        saida+=d;
    }
    return saida;
}

export default intercalarFilas;