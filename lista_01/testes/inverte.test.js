import inverte from "../src/inverte";

test("Inverter palavra",
    () => {
        expect(inverte("ABACAXI")).toBe("IXACABA");
    }
);