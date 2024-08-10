const express = require("express");
const { AccountModel } = require("../models/AccountModel.js");
const { createJwt, comparePasswords, decodeJwt } = require("../utils/authHelpers.js");
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

// Sign up route
router.post("/", async (request, response) => {
  let result = await AccountModel.create(request.body).catch(error => {
    error.status = 400;
    console.log("Error on creating a user", error);
    return error
  });

  let jwt = createJwt(result._id);
  let decodedJwt = decodeJwt(jwt);

  if (result.errors) {
    return next(result);
  }

  response.json({
    message: "Created account",
    data: result,
  });
});

// Login route
router.post("/auth", async (request, response, next) => {
  console.log(request.body)

  let newJwt = "";

  if (!request.body.password || !request.body.email){
    return next(new Error("Missing details at login."))
  }

  let foundUser = await AccountModel.findOne({email: request.body.email}).exec();

  console.log(request.body, foundUser);

  let isPasswordCorrect = await comparePasswords(request.body.password, foundUser.password);

  if (isPasswordCorrect){

    newJwt = createJwt(foundUser._id);

    response.json({
      jwt: newJwt
    });
  } else {
    return next(new Error("Incorrect password"))
  }
})

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
