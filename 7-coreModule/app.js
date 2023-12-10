const { log } = require("console");

// ***Core Module***

/*
 * File System
 **/
const fs = require("fs");

// ==================================================
// Menulis string ke file (synchronous) sesuai urutan

/*
try {
  fs.writeFileSync(
    // di tulis 1
    "data/synchronous.txt",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );
  // di tulis ke 2
  fs.writeFileSync("data/synchronous.txt", "Hello World secara synchronous!");
} catch (e) {
  log(e);
}
*/

// ========================================
// Menulis string ke file (asynchronous)

/*
fs.writeFile(
  // di tulis ke 2 dikarenakan text yang di tulis lebih banyak
  "data/asynchronous.txt",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  (e) => {
    log(e);
  }
);
*/

/*
fs.writeFile(
  // di tulis ke 1 dikarenakan text yang di tulis lebih sedikit
  "data/asynchronous.txt",
  "Hello World secara asynchronous!",
  (e) => {
    log(e);
  }
);
*/

// ==================================================
//Membaca isi file (synchronous) sesuai urutan

/*
const dataSynchronous = fs.readFileSync("data/synchronous.txt", "utf-8");
log(dataSynchronous);
*/

//Membaca isi file (synchronous) sesuai urutan
/*
fs.readFile("data/asynchronous.txt", "utf-8", (err, data) => {
  if (err) throw err;
  log(data);
});
*/

/*
fs.readFile("data/synchronous.txt", "utf-8", (err, data) => {
  if (err) throw err;
  log(data);
});*/

/*
 * Readline
 **/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda: ", (nama) => {
  rl.question("Masukkan nomor HP anda: ", (noHP) => {
    const contact = { nama, noHP };
    const file = fs.readFileSync("data/contacts.json", "utf8");

    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    log(`Terimakasih ${nama} sudah memasukkan data.`);
    rl.close();
  });
});
