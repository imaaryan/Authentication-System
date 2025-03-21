import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const db = () => {
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Connect DB");
  })

  .catch((error) => {
    console.log(error, "Failed to Connect DB");
  });
}

export default db;
