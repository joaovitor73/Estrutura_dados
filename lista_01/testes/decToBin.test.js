import decToBin from "../src/decToBin";

test("Conversor de dec para bin",
    () => {
        expect(decToBin(50)).toBe("110010");
        expect(decToBin(150)).toBe("10010110");
    }
);