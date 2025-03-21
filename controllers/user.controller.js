import User from "../models/User.model.js";
import crypto from "crypto";

const registerUser = async (req, res) => {
  // What We Have to do to register user in our platform
  // get data
  // validate if data is in correct not empty || format like email contains @xyz.com and pass contains spacial character
  // check if email already exister or not
  // if email don't exist add the user
  // genrate a verifictaionToken and save in db
  // send token to user by mail or sms anything
  // send success satus to user like you have successfully login!

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All Fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    const user = await User.create({ name, email, password });

    if (!user) {
      return res.status(400).json({
        message: "User Not Registered",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    user.verificationToken = token;
    await user.save();


  } catch (error) {}
};

export { registerUser };
