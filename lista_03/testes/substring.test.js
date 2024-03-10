import substring from "../src/substring";

test("substring",
    () => {
        expect(substring("João Vitor",4,6)).toBe("o V");
    }
);