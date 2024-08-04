const { default: mongoose } = require("mongoose");

async function connectDatabase() {
  let databaseURL =
    process.env.DATABASE_URL || "mongodb://localhost:27017/eventpulsedb";

  await mongoose.connect(databaseURL);
  console.log("Database connecting completed");
}

async function databaseClose() {
  await mongoose.connection.close();
  console.log("Database closed");
}

async function databaseDrop(){
  await mongoose.connection.db.dropDatabase();
}
module.exports = {
  connectDatabase,
  databaseClose,
  databaseDrop
};
