import ordemIdade from "../Estrutura_dados/lista_03/src/ordemIdade";
import lista from "../Estrutura_dados/estruturas/src/lista";
import ordemNome from "../Estrutura_dados/lista_03/src/ordemNome";
let l;
beforeEach(
    () => {
        l = new lista();
    }
);


test("Lista ordenada por idade",
    () => {
        l.append(30);
        l.append(10);
        l.append(5);
        l.append(11);
        l.append(12);
        l.append(20);
        expect(ordemIdade(l)).toBe("5 10 11 12 20 30 ");
    }
);


test("Lista ordenada por alfabeto",
    () => {
        l.append("Jessica");
        l.append("Bia");
        l.append("João");
        l.append("Carol");
        l.append("Bianca");
        l.append("Tabata");
        expect(ordemIdade(l)).toBe("Bia Bianca Carol Jessica João Tabata ");
    }
);


/*
test("Ordenando idades",
    () => {
        expect(ordemIdade("5326781")).toBe("1235678");
        expect(ordemIdade("312")).toBe("123");
    }
);
*/