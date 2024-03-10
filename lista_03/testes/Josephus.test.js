import Josephus from "../src/Josephus";

test("Josephus",
    () => {
        expect(Josephus(4,2)).toBe("3241");
    }
);