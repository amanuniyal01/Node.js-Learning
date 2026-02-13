const auth = (req, res, next) => {
    const token = "aman"
    if (token === "aman") {
        next()
    }
    else {
        res.status(401).send("Unauthorized");
    }

}

module.exports=auth