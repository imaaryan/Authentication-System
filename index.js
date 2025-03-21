import express from "express";
import dotenv from "dotenv";
import db from "./utils/db.connect.js";


//import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Homepage!");
});

// running db function to connect with db
db();

//user routes
app.use("/api/v1/users", userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
