const { app } = require("./server.js");
const { connectDatabase } = require("./utils/database.js");

app.listen(3000, () => {
  connectDatabase();
  console.log("Server running on port 3000");
});
