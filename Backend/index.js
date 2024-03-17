const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs'); 
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path');

dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const dbConnect = require("./config/db");
dbConnect();

const admin = require("./routes/admin");
app.use("/api/v1", admin);



app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})

