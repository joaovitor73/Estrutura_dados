import reversa from "../src/reversa";

test("Revertendo uma fila",
    () => {
        expect(reversa("1354")).toBe("4531");
    }
);