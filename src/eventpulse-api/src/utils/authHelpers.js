const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
dotenv.config();

async function comparePasswords(plainTextPassword, encryptedPassword) {
  let doesPasswordMatch = false;

  doesPasswordMatch = await bcrypt.compare(
    plainTextPassword,
    encryptedPassword,
  );

  return doesPasswordMatch;
}

function createJwt(accountId) {
  let newJwt = jwt.sign(
    { id: accountId },

    process.env.JWT_KEY,

    {
      expiresIn: "7d",
    },
  );

  return newJwt;
}

function validateJwt(jwtToValidate) {
  let isJwtValid = false;

  jwt.verify(jwtToValidate, process.env.JWT_KEY, (error, decodedJwt) => {
    if (error) {
      throw new Error("User JWT is not valid");
    }

    console.log("Decoded JWT data:");
    console.log(decodedJwt);
    isJwtValid = true;
  });

  return isJwtValid;
}

function decodeJwt(jwtToDecode){
  let decodedData = jwt.verify(jwtToDecode, process.env.JWT_KEY)
  return decodedData;
}

module.exports = {
  comparePasswords,
  createJwt,
  validateJwt,
  decodeJwt,
};
