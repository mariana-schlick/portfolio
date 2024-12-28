const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001;

// server used to send send emails
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Help from server!"})
});

app.listen(PORT, () => {
    console.log(`Server is online on port: ${PORT}`)
})