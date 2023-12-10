const { log } = require("console");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync("data/contacts.json", "[]", "utf-8");
}

// Membuat membuat promise untuk pertanyaan
const writeQuestions = (question) => {
  return new Promise((resolve, rejects) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const saveContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(fileBuffer);

  contacts.push(contact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  log(`Terimakasih ${nama} sudah memasukkan data.`);
  rl.close();
};

module.exports = {
  writeQuestions,
  saveContact,
};
