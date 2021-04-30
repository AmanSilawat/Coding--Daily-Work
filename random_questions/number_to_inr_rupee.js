// Number to rupee

const rupee = 1544423456.789
console.log(rupee.toLocaleString('ja-JP', { style: 'currency', currency: 'INR' })); // ₹1,544,423,456.79

const prices = [500, 812354577, 12];
console.log(prices.toLocaleString('ja-JP', { style: 'currency', currency: 'INR' })); // ₹500.00,₹812,354,577.00,₹12.00


console.log(prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })); // "￥7,￥500,￥8,123,￥12"