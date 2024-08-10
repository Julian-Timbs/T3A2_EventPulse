// Importing Express to use it
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

// Create Express server instance to start configuration
const app = express();

app.use(cors());

// Tell server how to use data
app.use(express.json());

app.get("/", (request, response, next) => {
  response.json({
    message: "Hello world!",
  });
});

const AccountRouter = require("./routers/AccountRouter.js");
app.use("/accounts", AccountRouter);

const EventRouter = require("./routers/EventRouter.js");
app.use("/events", EventRouter);

// Get database details
app.get("/databaseHealth", (request, response) => {
  let databaseState = mongoose.connection.readyState;
  let databaseName = mongoose.connection.name;
  let databaseModels = mongoose.connection.modelNames();
  let databaseHost = mongoose.connection.host;

  response.json({
    readyState: databaseState,
    dbName: databaseName,
    dbModels: databaseModels,
    dbhost: databaseHost,
  });
});

app.get("*", (request, response, next) => {
  response.json({ message: "404 route activated!" });
});

// Error handling for the server
app.use((error, request, response, next) => {
  response.status(500).json({
    message: "Error occured in the server.",
    error: error.message,
  });
});

module.exports = {
  app,
};
