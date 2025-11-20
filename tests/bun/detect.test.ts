// Bun test file
import { expect, test } from "bun:test";
import { detect } from "detect-conditions";
import { isBun, isDeno, isNode } from "detect-conditions/assert";

test("detect returns an object with expected properties", () => {
	const result = detect();

	expect(result).toHaveProperty("core");
	expect(result).toHaveProperty("common");
	expect(result).toHaveProperty("runtime");
	expect(result).toHaveProperty("webpack");

	expect(Array.isArray(result.core)).toBe(true);
	expect(Array.isArray(result.common)).toBe(true);
	expect(Array.isArray(result.runtime)).toBe(true);
	expect(Array.isArray(result.webpack)).toBe(true);
});

test("detect identifies bun runtime", () => {
	const result = detect();

	expect(result.runtime).toContain("bun");
});

test("bun runtime is node-like environment", () => {
	const result = detect();

	expect(result.runtime).toContain("node");
});

test("bun runtime is not deno-like", () => {
	const result = detect();

	expect(result.runtime).not.toContain("deno");
});

test("detect identifies import condition", () => {
	const result = detect();

	expect(result.core).toContain("import");
});

test("isBun returns true in Bun environment", () => {
	expect(isBun()).toBe(true);
});

test("isNode returns true in Bun environment (node-like)", () => {
	expect(isNode()).toBe(true);
});

test("isDeno returns false in Bun environment", () => {
	expect(isDeno()).toBe(false);
});
