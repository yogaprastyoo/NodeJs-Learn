const app = require("./app");
console.log(`PI         : ${app.PI}`); // Variable
console.log(`Cetak nama : ${app.cetakNama("Yoga Prastyo")}`); // Function
console.log(`Mahasiswa  : ${app.mahasiswa.cetakMahasiswa()}`); // Object
console.log(new app.Orang()); // Class
