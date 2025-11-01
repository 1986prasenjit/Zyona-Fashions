import app from "./app.js";
import dotenv from "dotenv";

import connectDB from "./dbConnect/dbConnect.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 5000;

//Database Connection
connectDB()
  .then(() =>
    app.listen(port, () => {
      console.log(`Server is listing at PORT ${port}`);
    })
  )
  .catch((error) => {
    console.log(`Error while connecting`, error);
  })
  .finally(() => {
    console.log("Database Connected");
  });
