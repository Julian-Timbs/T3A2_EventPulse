const express = require("express");
const { EventModel } = require("../models/EventModel");
const { AccountModel } = require("../models/AccountModel");
const router = express.Router();

router.get("/", async (request, response) => {
  let result = await EventModel.find({}).populate("host").exec();

  response.json({
    message: "Event router homepage",
    result: result,
  });
});

router.get("/:id", async (request, response) => {
  let result = await EventModel.findById(request.params.id)
    .populate("host")
    .exec();

  response.json({
    message: "Found event",
    result: result,
  });
});

router.post("/", async (request, response) => {
  let result = await EventModel.create(request.body).populate("host");

  response.json({
    message: "Created event",
    data: result,
  });
});

router.patch("/:id", async (request, response) => {
  let result = await EventModel.findByIdAndUpdate(
    request.params.id,
    request.body,
    { returnDocument: "after" },
  );

  response.json({
    message: "Event updated",
    result: result,
  });
});

router.delete("/:id", async (request, response) => {
  let result = await EventModel.findByIdAndDelete(request.params.id).populate(
    "host",
  );

  response.json({
    message: "Deleted event",
    data: result,
  });
});

module.exports = router;
