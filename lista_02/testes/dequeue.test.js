import dequeue from "../src/dequeue";

let d;

beforeEach(
    () => {
        d = new dequeue();
    }
);

test("Adicionar no começo da fila",
    () => {
        d.enqueue(1);
        d.enqueue(2);
        d.enqueue(3);
        d.enqueueHead(4);
        expect(d.front()).toBe(4);
        expect(d.toString()).toBe("4123");
        d.enqueueHead(7);
        expect(d.toString()).toBe("74123");
        d.dequeue();
        expect(d.toString()).toBe("4123");
        d.dequeueTail();
        expect(d.toString()).toBe("412");
    }
);