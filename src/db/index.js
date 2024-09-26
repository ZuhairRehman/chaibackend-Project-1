import mongoose from "mongoose";
import { DB_NAME } from "../constants/db_name";

const connectDB = async function () {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};
