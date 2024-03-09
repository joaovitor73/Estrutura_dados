import ValidarSequenciaParen from "../src/ValidarSequenciaParen";

test("Validar sequência",
    () => {
        expect(ValidarSequenciaParen("[()[()]]()")).toBe(true);
        expect(ValidarSequenciaParen("(()]")).toBe(false);
    }
);