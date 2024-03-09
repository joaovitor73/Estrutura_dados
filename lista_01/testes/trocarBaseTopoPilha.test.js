import trocaBaseTopoPilha from "../src/trocarBaseTopoPilha";

test("Trocar base e o topo da pilha",
    () => {
        expect(trocaBaseTopoPilha("1234")).toStrictEqual(["4", "2", "3", "1"]);
    }
);