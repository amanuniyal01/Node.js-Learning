const express = require("express");
const app = express();

// const auth = require("./auth");
//  Middleware for ALL /user requests (all HTTP methods)
// app.use("/user", auth);


//  AFTER middleware
// app.get("/user/login", (req, res) => {
//     res.send("User Logged In");
// });

// app.get("/user", (req, res) => {
//     res.send("User Home");
// });

app.get("/user/details", (req, res) => {
    throw new Error("abcdef")
    res.send("User Details sent successfully");
});
// Error should be the first parameter then will only it works.
app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong")
    }

})


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
