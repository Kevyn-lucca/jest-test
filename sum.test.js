import { sum } from "./sum";
import { sub } from "./sum";
import { reverse } from "./sum";
import { capitalize } from "./sum";

test("adds 1 + 2 to equal 3", () => {
	expect(sum(1, 2)).toBe(3);
});

test("Subtracts two numbers", () => {
	expect(sub(1, 2)).toBe(-1);
});

test("Reverses a string", () => {
	expect(reverse("Arcana")).toBe("anacrA");
});

test("Capitalizes the first letter", () => {
	expect(capitalize("arcana")).toBe("Arcana");
});
