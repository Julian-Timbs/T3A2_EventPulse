const { AccountModel } = require("../models/AccountModel");
const { EventModel } = require("../models/EventModel");
const { comparePasswords, createJwt, validateJwt } = require("./authHelpers");
const { connectDatabase, databaseDrop, databaseClose } = require("./database");

async function seedAccounts() {
  let accountData = [
    {
      email: "account1@email.com",
      password: "password",
      location: "here",
      preferences: ["food", "music"],
    },
    {
      email: "account2@email.com",
      password: "password",
      location: "here",
      preferences: ["community events", "sports", "arts & culture"],
    },
    {
      email: "account3@email.com",
      password: "password",
      location: "here",
      preferences: ["family", "education"],
    },
  ];

  anotherAccount = {
    email: "account4@email.com",
    password: "password",
    location: "here",
    preferences: ["community events", "sports", "music"],
  }
  
  let result = await AccountModel.insertMany(accountData);

  let accountFour = await AccountModel.create(anotherAccount);

  await accountFour.save();

  console.log("accountFour's encrypted password is: " + accountFour.password);
  let doesAccountPassMatch = await comparePasswords("password", accountFour.password);
  console.log("accountFour's password is 'password': " + doesAccountPassMatch);

  console.log([ ...result, accountFour ]);
  return result;
}

async function seedEvents(accounts) {
  let eventData = [
    {
      eventName: "Event 1",
      dateTime: "16-08-2024T12:00:00Z",
      location: "Brisbane",
      description: "Lorem Ipsum",
      host: accounts[0].id,
      image: "https://placehold.co/600x400",
    },
    {
      eventName: "Event 2",
      dateTime: "31-08-2024T12:00:00Z",
      location: "Sunshine Coast",
      description: "Lorem Ipsum",
      host: accounts[1].id,
      image: "https://placehold.co/600x400",
    },
    {
      eventName: "Event 3",
      dateTime: "24-08-2024T12:00:00Z",
      location: "Gold Coast",
      description: "Lorem Ipsum",
      host: accounts[0].id,
      image: "https://placehold.co/600x400",
    },
  ];

  let result = await EventModel.insertMany(eventData);
  console.log(result);
  return result;
}

async function seed() {
  await connectDatabase();
  await databaseDrop();

  let newAccounts = await seedAccounts();
  let newEvents = await seedEvents(newAccounts);

  let newJwt = createJwt(newAccounts[0]._id);
  console.log("New JWT: " + newJwt);

  validateJwt(newJwt);

  console.log("Data has been seeded");
  await databaseClose();
}

seed();
