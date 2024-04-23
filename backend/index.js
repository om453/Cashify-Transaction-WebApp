const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index");
const app = express();
require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen( process.env.PORT , () => {
    console.log("Server is running on port 3000");
}
);

