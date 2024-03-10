import lista from "../src/lista";

let l;


beforeEach(
    () => {
        l = new lista();
    }
);

test("adicionando ao inicio fila",
    () => {
        l.add(1);
        l.add(2);
        l.add(3);
        expect(l.searchPosicao(3)).toBe(1);
    }
);

test("adicionando no fim da fila",
    () => {
        l.append(1);
        l.append(2);
        l.append(3);
        expect(l.searchPosicao(1)).toBe(1);
    }
);

test("removendo no inicio da fila",
    () => {
        l.add(1);
        l.add(5);
        l.add(3);
        l.removeFirst();
        expect(l.searchPosicao(1)).toBe(5);
    }
);

test("removendo no fim da fila",
    () => {
        l.append(1);
        l.append(2);
        l.append(3);
        l.removeLast();
        expect(l.searchPosicao(2)).toBe(2);
    }
);

test("adicionando ao meio fila",
    () => {
        l.append(1);
        l.append(2);
        l.append(3);
        l.addAt(4,2);
        expect(l.searchPosicao(1)).toBe(1);
    }
);

test("removendo ao meio da fila",
    () => {
        l.append(1);
        l.append(2);
        l.append(3);
        l.removeAt(1);
        expect(l.searchPosicao(1)).toBe(2);
    }
);



