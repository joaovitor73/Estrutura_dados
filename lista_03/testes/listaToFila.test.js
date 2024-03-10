import listaToFila from "../src/listaToFila";

let f;

beforeEach(
    () => {
        f  = new listaToFila();
    }
);


test("Adicionando elemento", 
    () => {
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        expect(f.front()).toBe(1);
    }
);

test("Removendo elemento da fila", 
    () => {
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.dequeue();
        expect(f.front()).toBe(2);
    }
);

test("Mostrando os dados da pilha", 
    () => {
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        console.log(f.toString());
    }
);


test("Apagando os dados da pilha", 
    () => {
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.clear();
        console.log(f.toString());
    }
);




