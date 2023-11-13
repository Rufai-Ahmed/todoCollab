import mongoose from "mongoose";
const URL = "mongodb://localhost:27017/todoDB";

const mainConnection = async () => {
  try {
    return await mongoose.connect(URL).then(() => {
      console.log("Database connected");
    });
  } catch (error) {
    console.log(error);
  }
};
