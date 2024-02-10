require("dotenv").config({ path: "./.env" });
const connectDB = require("./DB");
const app = require("./app");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server Running on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB Connection Failed", error);
  });
