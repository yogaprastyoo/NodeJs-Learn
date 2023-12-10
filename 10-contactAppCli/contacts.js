const fs = require("fs");
const validator = require("validator");
const chalk = require("chalk");

// Create a data folder if it doesn't already exist
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Create a contacts.json file if it doesn't already exist
const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync("data/contacts.json", "[]", "utf-8");
}

// Load file contacts.json
const loadContact = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

// Adding a new contact
const saveContact = (name, email, phone_number) => {
  const contact = { name, email, phone_number };
  const contacts = loadContact();

  // Validation Email
  if (email && !validator.isEmail(email)) {
    console.log(chalk.red.inverse.bold("Invalid email."));
    return false;
  }
  // Validation Number Phone
  if (phone_number && !validator.isMobilePhone(phone_number)) {
    console.log(chalk.red.inverse.bold("\nInvalid phone number."));
    return false;
  }

  // Validation unique
  const isDuplicateName = contacts.some((contact) => contact.name === name);
  const isDuplicateEmail = contacts.some((contact) => contact.email === email);
  const isDuplicatePhone = contacts.some(
    (contact) => contact.phone_number === phone_number
  );

  if (isDuplicateName) {
    console.log(chalk.red.inverse.bold("\nName is already registered."));
    return false;
  }

  if (email && isDuplicateEmail) {
    console.log(chalk.red.inverse.bold("\nEmail is already registered."));
    return false;
  }

  if (isDuplicatePhone) {
    console.log(
      chalk.red.inverse.bold("\nPhone Number is already registered.")
    );
    return false;
  }

  contacts.push(contact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 4));
  console.log(
    chalk.bold.green(
      `\nContact ${name} has been successfully added to your contact list.`
    )
  );
};

// Displays the contact list
const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.bold.cyan("\nDaftar Kontak : "));
  contacts.forEach((contact, i) => {
    console.log(
      `${i + 1}. Name: ${contact.name}, Phone Number: ${contact.phone_number}`
    );
  });
};

// Displays contact details by name
const detailContactByName = (name) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`\nName ${name} is invalid.`));
    return false;
  }

  console.log(chalk.bold.cyan(`\nDetail Kontak ${name}: `));

  const contactInfo = [
    `Name         : ${contact.name}`,
    `Phone Number : ${contact.phone_number}`,
    contact.email ? `Email        : ${contact.email}` : undefined,
  ];

  console.log(contactInfo.filter((info) => info).join("\n"));
};

// Delete contact by name
const deleteContactByName = (name) => {
  const contacts = loadContact();
  const indexDel = contacts.findIndex(
    (x) => x.name.toLowerCase() === name.toLowerCase()
  );
  if (indexDel === -1) {
    console.log(chalk.red.inverse.bold(`Name ${name} is invalid`));
    return false;
  }

  contacts.splice(indexDel, 1);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 4));
  console.log(
    chalk.green.bold(`\nContact ${name} has been successfully deleted`)
  );
};

module.exports = {
  saveContact,
  listContact,
  detailContactByName,
  deleteContactByName,
};
