use rust_decimal::{Decimal, prelude::FromPrimitive};

pub const SCALE_SHIFT: u32 = 16;
pub const SCALE_MASK: u32 = 0x00FF_0000;
pub const SIGN_SHIFT: u32 = 31;
pub const SIGN_MASK: u32 = 0x8000_0000;


fn main() {
    let value = 1e21;
    println!("value: {}", value);

    let value_decimal = Decimal::from_f64(value).unwrap();
    println!("decimal bytes: {:?}", value_decimal.serialize());

    let result = decode_bytes(value_decimal.serialize());
    println!("result: {:?}", result);

    assert_eq!(value, result);
}

pub fn decode_bytes(bytes: [u8; 16]) -> f64 {

    let flags: u32 = u32::from_le_bytes(bytes[0..4].try_into().unwrap());
    let lo: u32 = u32::from_le_bytes(bytes[4..8].try_into().unwrap());
    let mid: u32 = u32::from_le_bytes(bytes[8..12].try_into().unwrap());
    let hi: u32 = u32::from_le_bytes(bytes[12..16].try_into().unwrap());
    
    
    let scale = (flags & SCALE_MASK) >> SCALE_SHIFT;
    let sign_is_positive = (flags & SIGN_MASK) >> SIGN_SHIFT == 0;
    
    let m = (lo as i128) | ((mid as i128) << 32) | ((hi as i128) << 64);

    let result = if sign_is_positive {
        (m as f64) / (10.0_f64).powf(scale as f64)
    } else  {
        (m as f64) * -1.0 / (10.0_f64).powf(scale as f64)
    };

    return result;
}