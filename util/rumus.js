const luasPersegi = (sisi) => sisi * sisi;

const kelilingPersegi = (sisi) => 4 * sisi;

const luasPersegiPanjang = (p, l) => p * l;

const kelilingPersegiPanjang = (p, l) => 2 * (p + l);

module.exports = {
  luasPersegi,
  kelilingPersegi,
  luasPersegiPanjang,
  kelilingPersegiPanjang,
};
