import mongoose from "mongoose";

const mongoUrl = process.env.MONGODB_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {});
    console.log("MongoDB server connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // exit app if cannot connect
  }
};

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log("MongoDB server disconnected");
});

export default connectDB;
