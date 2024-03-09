import reversa from "../Estrutura_dados/lista_02/src/reversa";

test("Revertendo uma fila",
    () => {
        expect(reversa("1354")).toBe("4531");
    }
);