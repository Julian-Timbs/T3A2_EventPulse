const { default: mongoose } = require("mongoose");

const Account = mongoose.model("Account", {
  email: String,
  password: String,
  location: String,
  preferences: {
    category: String,
  },
});

module.exports = {
  Account,
};
