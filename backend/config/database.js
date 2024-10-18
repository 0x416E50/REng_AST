const mongoose = require('mongoose');

// Load environment variables from .env file
const MONGO_URI="mongodb+srv://silkoul6:oFIEiKEUaMeedzPh@cluster0.7xa1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
