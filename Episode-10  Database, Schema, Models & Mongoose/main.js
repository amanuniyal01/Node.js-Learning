const express = require("express");
const app = express();
const connectDB = require("./src/config/database")

connectDB().then(() => {
    console.log("Database connected Successfully.")
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}).catch(err => {

    console.log("Error in connecting Database" + err)
})

