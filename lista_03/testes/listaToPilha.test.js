import listaToPilha from "./listaToPilha";
let p;
beforeEach(
    () => {
        p = new listaToPilha();
    }
);

test("Adicionando ao final", 
    () => {
        p.push(1);
        p.push(2);
        p.push(3);
        expect(p.top()).toBe(3);
    }
);

test("Removendo elemento do final", 
    () => {
        p.push(1);
        p.push(2);
        p.push(3);
        p.pop();
        expect(p.top()).toBe(2);
    }
);

test("limpando pilha", 
    () => {
        p.push(1);
        p.push(2);
        p.push(3);
        console.log(p.top());
    }
);

test("Mostrando os dados da pilha", 
    () => {
        p.push(1);
        p.push(2);
        p.push(3);
        console.log(p.toString());
    }
);


test("Apagando os dados da pilha", 
    () => {
        p.push(1);
        p.push(2);
        p.push(3);
        p.clear()
        console.log(p.toString());
    }
);




