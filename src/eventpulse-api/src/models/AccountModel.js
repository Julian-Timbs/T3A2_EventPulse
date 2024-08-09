const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

const accountSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  location: {
    type: [String],
    required: true,
    unique: false,
  },
  preferences: {
    type: [String], // potentially could be enums
    required: true,
    unique: false,
  },
});

accountSchema.pre("save", async function(next) {
  const user = this;
  console.log("Pre-save hook running");

  if (!user.isModified("password")) {
    return next();
  }

  console.log("Pre-save hook run and password is modified");

  console.log("Raw password is: " + this.password);

  const hash = await bcrypt.hash(this.password, 10);

  console.log("Hashed and encrypted and salted password is: " + hash);

  this.password = hash;

  next();
});

const AccountModel = mongoose.model("Account", accountSchema);

module.exports = {
  AccountModel,
};
