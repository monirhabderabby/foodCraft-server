const express = require("express");
const app = express();
const cors = require("cors");

// middleware

app.use(express.json());
app.use(cors());

//routes routes
// const projectRoute = require("./routes/prooject.route");
// const testmonialsRoute = require("./routes/testmonials.route");

// app.use("/api/v1/project", projectRoute);
// app.use("/api/v1/testmonials", testmonialsRoute);

//home
app.get("/", (req, res) => {
    res.send("Route is working");
});

module.exports = app;
