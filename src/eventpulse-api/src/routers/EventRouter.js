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
  let result = await EventModel.findById(request.params.id).exec();

  response.json({
    message: "Found event",
    result: result,
  });
});

router.post("/", async (request, response) => {
  let result = await EventModel.create(request.body);

  response.json({
    message: "Created event",
    data: result,
  });
});


router.patch("/:id", (request, response) => {

});

router.delete("/:id", async (request, response) => {
  let result = await EventModel.findByIdAndDelete(request.params.id);

  response.json({
    message: "Deleted event",
    data: result,
  });
});

module.exports = router;
