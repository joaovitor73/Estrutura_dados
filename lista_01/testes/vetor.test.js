import vetor from "../src/vetor";

let v;

beforeEach(
    () => {
        v = new vetor(4);
    }
);

test("Adicionando apenas na pilha A",
    () => {
       v.empilhaA(1);
       v.empilhaA(2);
       v.empilhaA(3);
       expect(v.toString()).toBe("123");
    }
);

test("Adicionando apenas na pilha B",
    () => {
       v.empilhaA(4);
       v.empilhaB(1);
       v.empilhaB(2);
       v.desempilhaB();

       expect(v.toString()).toBe("41");
    }
);