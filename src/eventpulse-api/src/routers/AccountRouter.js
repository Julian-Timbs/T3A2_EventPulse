const express = require("express");
const { Account } = require("../models/AccountModel");
const router = express.Router();

router.get("/", (request, response) => {
  response.json({
    message: "Account router activated",
  });
});

// Find user's account
router.get("/:id", async (request, response) => {
  let result = await Account.findById(request.params.id).exec();

  response.json({
    message: "Found account",
    data: result,
  });
});

router.post("/", async (request, response) => {
  let result = await Account.create(request.body);

  response.json({
    message: "Created account",
    data: result,
  });
});

router.patch("/:id", (request, response) => {});

module.exports = router;
