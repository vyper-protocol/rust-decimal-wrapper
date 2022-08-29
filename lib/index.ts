const SCALE_SHIFT = 16;
const SCALE_MASK = 0x00ff_0000;
const SIGN_SHIFT = 31;
const SIGN_MASK = 0x8000_0000;

export class RustDecimalWrapper {
  readonly bytes: Uint8Array;

  constructor(bytes: Uint8Array) {
    if (bytes.length != 16) throw new Error("buffer size must be eq to 16");
    this.bytes = bytes;
  }

  toNumber(): number {
    let flags = Buffer.from(this.bytes).readUInt32LE(0);
    let lo = Buffer.from(this.bytes).readUInt32LE(4);
    let mid = Buffer.from(this.bytes).readUInt32LE(8);
    let hi = Buffer.from(this.bytes).readUInt32LE(12);

    let scale = (flags & SCALE_MASK) >> SCALE_SHIFT;
    let signIsPositive = (flags & SIGN_MASK) >> SIGN_SHIFT == 0;
    let m = Number(BigInt(lo) | (BigInt(mid) << 32n) | (BigInt(hi) << 64n));

    let res = m / 10 ** scale;
    if (!signIsPositive) res *= -1;

    return res;
  }
}
