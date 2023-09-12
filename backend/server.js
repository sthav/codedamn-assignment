const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();

const userDataRoute = require("./routes/userDataRoute");
app.use(express.json());

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log("Connected Successfully using mongo");
        app.listen(process.env.PORT || 8000, (err) => {
            if (err) console.log(err);
            console.log(`running at port ${process.env.Port}`);
        });
    })
    .catch((error) => console.log("Failed to connect", error));
app.use(cors());
app.use("/api/user", userDataRoute);