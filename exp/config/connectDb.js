// connection ka code karengye mongodb se // mongoose connection me help krta h aur schema prvd krta h.
const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("server connect to db");
    } catch (error){
        console.log("server not connected to db");
    }
}
module.exports = connectDb