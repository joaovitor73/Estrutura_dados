import intercalarFilas from "../src/intercalarFilas";

test("Intercalar filas",
    () => {
        expect(intercalarFilas("12", "334")).toBe("13234");
    }
);