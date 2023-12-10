// Variable
const PI = 3.14;

// Function
const cetakNama = (nama) => {
  return `Nama saya ${nama}`;
};

// Object
const mahasiswa = {
  nama: "Yoga Prastyo",
  umur: 18,
  cetakMahasiswa() {
    return `Halo, nama saya ${this.nama}, saya ${this.umur} tahun.`;
  },
};

// Class
class Orang {
  constructor() {
    console.log("Objek orang telah dibuat");
  }
}

module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang,
};
