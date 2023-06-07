const mongoose = require('mongoose');

const connectDB = async () => {
    const dbName = "tambola";
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
        console.log("DB connected...");
    }
    catch (error) {
        console.error("DB not connected", error);
        mongoose.connection.close();
    }
};

module.exports = connectDB;
