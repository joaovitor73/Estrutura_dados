import pilhasEmFila from "../src/pilhasEmFila";
let f;
beforeEach(() => {f = new pilhasEmFila});
test("Testar comportamento da fila",
    () => {
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.dequeue();
        f.dequeue();
        expect(f.toString()).toBe("3");
    }
);