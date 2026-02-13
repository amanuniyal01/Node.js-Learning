const express = require("express");
const app = express();

const auth = require("./auth");
//  Middleware for ALL /user requests (all HTTP methods)
app.use("/user", auth);


//  AFTER middleware
app.get("/user/login", (req, res) => {
    res.send("User Logged In");
});

app.get("/user", (req, res) => {
    res.send("User Home");
});

app.get("/user/details", (req, res) => {
    res.send("User Details");
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});
