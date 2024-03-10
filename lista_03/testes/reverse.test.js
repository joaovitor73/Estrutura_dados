import reversa from "../Estrutura_dados/lista_02/src/reversa";

test("Invertendo lista",
    () => {
        expect(reversa("12345")).toBe("54321");
    }
);