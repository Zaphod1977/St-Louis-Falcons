const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
}); 
app.use(require('./routes/router.js'));

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    })
  })

mongoose.set('debug', true);