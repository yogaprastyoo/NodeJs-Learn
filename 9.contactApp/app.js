const { writeQuestions, saveContact } = require("./contacts");

const main = async () => {
  const nama = await writeQuestions("Masukkan Nama anda : ");
  const email = await writeQuestions("Masukkan Email anda : ");
  const noHP = await writeQuestions("Masukkan No HP anda : ");

  saveContact(nama, email, noHP);
};

main();
