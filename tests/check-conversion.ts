import { expect } from "chai";
import { RustDecimalWrapper } from "../lib/index";

describe("rust-decimal-wrapper", () => {
	it("check value: 1", async () => {
		expect(
			new RustDecimalWrapper(new Uint8Array([0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toNumber()
		).to.be.eql(1);
	});

	it("check value: 0.1", async () => {
		expect(
			new RustDecimalWrapper(new Uint8Array([0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toNumber()
		).to.be.eql(0.1);
	});

	it("check value: 0.2", async () => {
		expect(
			new RustDecimalWrapper(new Uint8Array([0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toNumber()
		).to.be.eql(0.2);
	});

	it("check value: 0.5", async () => {
		expect(
			new RustDecimalWrapper(new Uint8Array([0, 0, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toNumber()
		).to.be.eql(0.5);
	});

	it("check value: 1/3", async () => {
		expect(
			new RustDecimalWrapper(new Uint8Array([0, 0, 16, 0, 85, 85, 64, 37, 166, 215, 11, 0, 0, 0, 0, 0])).toNumber()
		).to.be.eql(1 / 3);
	});

	it("check value: 1e21", async () => {
		expect(
			new RustDecimalWrapper(new Uint8Array([0, 0, 0, 0, 0, 0, 160, 222, 197, 173, 201, 53, 54, 0, 0, 0])).toNumber()
		).to.be.eql(1e21);
	});
});
