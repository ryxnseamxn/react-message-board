const express = require("express");
const cors = require('cors');
const messageRouter = require("./routes/messageRouter");
const functions = require('firebase-functions');
const app = express(); 

const allowedOrigins = [
    'https://your-production-domain.com', 
    'https://www.your-production-domain.com', 
    'http://localhost:3000'
]

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(messageRouter); 

exports.api = functions.https.onRequest(app); 