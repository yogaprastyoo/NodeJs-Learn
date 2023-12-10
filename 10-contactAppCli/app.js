const {
  saveContact,
  listContact,
  detailContactByName,
  deleteContactByName,
} = require("./contacts");
const yargs = require("yargs");

// Adding a new contact
yargs
  .command({
    command: "add",
    describe: "Adding a new contact",
    builder: {
      name: {
        describe: "Full Name",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      phone_number: {
        describe: "Phone Number",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      saveContact(argv.name, argv.email, argv.phone_number);
    },
  })
  .demandCommand();

// Displays the contact list
yargs.command({
  command: "list",
  describe: "Displays the contact list",
  handler() {
    listContact();
  },
});

// Display contact details by name
yargs.command({
  command: "detail",
  describe: "displays contact details by name",
  builder: {
    name: {
      describe: "Full Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContactByName(argv.name);
  },
});

// Delete contact by name
yargs.command({
  command: "delete",
  describe: "Delete contact by name",
  builder: {
    name: {
      describe: "Full Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContactByName(argv.name);
  },
});

yargs.parse();
