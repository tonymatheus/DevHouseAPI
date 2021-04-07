import { Schema, model } from "mongoose";

const UserScheme = new Schema({
  email: String,
});

export default model("User", UserScheme);
