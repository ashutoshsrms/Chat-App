const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(`DB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit();
  }
};

module.exports=connectToDb;