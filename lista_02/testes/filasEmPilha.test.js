import filasEmPilha from "../src/filasEmPilha";

let p;
beforeEach(
    () => {
        p = new filasEmPilha();
    }
); 

test("Testar o comportamento da pilha",
    () => {
        p.push(1);
        p.push(2);
        p.push(3);
        p.pop();
        expect(p.toString()).toBe("12");
    }
);