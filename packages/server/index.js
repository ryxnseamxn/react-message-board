const express = require("express");
const messageRouter = require("./routes/messageRouter");
const functions = require('firebase-functions');
const app = express(); 


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(messageRouter); 

exports.api = functions.https.onRequest(app); 