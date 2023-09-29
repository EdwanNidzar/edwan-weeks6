const rumus = require("./util/rumus");

const hitungLuasPersegi = rumus.luasPersegi(5);
const hitungKelilingPersegi = rumus.kelilingPersegi(5);
const hitungLuasPersegiPanjang = rumus.luasPersegiPanjang(10, 2);
const hitungKelilingPersegiPanjang = rumus.kelilingPersegiPanjang(10, 2);

console.log(`Luas Persegi             : ${hitungLuasPersegi}`);
console.log(`Keliling Persegi         : ${hitungKelilingPersegi}`);
console.log(`Luas Persegi Panjang     : ${hitungLuasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang : ${hitungKelilingPersegiPanjang}`);
