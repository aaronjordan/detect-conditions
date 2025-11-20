import { detect } from "detect-conditions";
import { isBun, isNode } from "detect-conditions/assert";
import { describe, expect, it } from "vitest";

describe("detect-conditions", () => {
	it("returns an object with expected properties", () => {
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

	it("identifies node runtime when running in Node.js", () => {
		const result = detect();

		expect(result.runtime).toContain("node");
	});

	it("is not bun runtime when running in Node.js", () => {
		const result = detect();

		expect(result.runtime).not.toContain("bun");
	});

	it("identifies import condition", () => {
		const result = detect();

		expect(result.core).toContain("import");
	});

	it("isNode returns true in Node.js environment", () => {
		expect(isNode()).toBe(true);
	});

	it("isBun returns false in Node.js environment", () => {
		expect(isBun()).toBe(false);
	});
});
