const { default: mongoose } = require("mongoose");

const accountSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
    },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  preferences: {
    type: [String], // potentially could be enums
    required: true
  },
})

const AccountModel = mongoose.model("Account", accountSchema);

module.exports = {
  AccountModel,
};
