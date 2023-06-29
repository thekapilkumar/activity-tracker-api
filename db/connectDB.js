const mongoose = require("mongoose")

const connectDB = () => {
    return mongoose.connect("mongodb://localhost:27017/todo")
        .then(() => {
            console.log("Connected Successfully...")
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = connectDB;