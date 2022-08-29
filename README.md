# Rust Decimal Wrapper

<p>
  <a href="https://github.com/vyper-protocol/rust-decimal-wrapper">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="rust-decimal-wrapper is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@vyper-protocol/rust-decimal-wrapper">
    <img src="https://img.shields.io/npm/v/@vyper-protocol/rust-decimal-wrapper?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://twitter.com/VyperProtocol">
    <img src="https://img.shields.io/twitter/follow/VyperProtocol.svg?label=Follow%20@VyperProtocol" alt="Follow @VyperProtocol" />
  </a>
</p>

A typescript node module to deserialize rust Decimal values

We created this library to read and use in js based apps decimal values serialized with the [rust_decimal](https://docs.rs/rust_decimal/latest/rust_decimal/) library.

## Installation

`yarn add @vyper-protocol/rust-decimal-wrapper`

## Usage

```ts
import { RustDecimalWrapper } from "@vyper-protocol/rust-decimal-wrapper";

// receive from an external application the bytes serialized with rust_decimal
const bytes = new Uint8Array([0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

// create a RustDecimalWrapper around the bytes
const wrapper = new RustDecimalWrapper(bytes);

// get the original value
const value = wrapper.toNumber();

// value is 0.1
```

## Getting Help

Join [our Discord channel](https://discord.gg/CVsFvY9G) and post a message in #developers
