const express = require("express");
const { AccountModel } = require("../models/AccountModel.js");
const router = express.Router();

router.get("/", (request, response) => {
  response.json({
    message: "AccountModel router activated",
  });
});

// Find user's account
router.get("/:id", async (request, response) => {
  let result = await AccountModel.findById(request.params.id).exec();

  response.json({
    message: "Found account",
    data: result,
  });
});

router.post("/", async (request, response) => {
  let result = await AccountModel.create(request.body);

  response.json({
    message: "Created account",
    data: result,
  });
});

router.patch("/:id", async (request, response) => {
  let result = await AccountModel.findByIdAndUpdate(
    request.params.id,
    request.body,
    { returnDocument: "after" },
  );

  response.json({
    message: "Account updated",
    result: result,
  });
});

router.delete("/:id", async (request, response) => {
  let result = await AccountModel.findByIdAndDelete(request.params.id);

  response.json({
    message: "Deleted account",
    data: result,
  });
});

module.exports = router;
