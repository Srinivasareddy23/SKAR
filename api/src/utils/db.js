import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB Atlas: ${db.connection.name}`);
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    process.exit(1); // Exit the process on failure
  }
};

export default dbConnection;
