const db = require("../db/temp");
const asyncHandler = require("express-async-handler");

exports.getMessages = asyncHandler(async (req, res) => {
    let messages = db.getMessages(); 
    res.send(json({ messages: messages})); 
}); 

exports.addMessage = asyncHandler(async (req, res) => {
    const text = req.body.text; 
    const user = req.body.user;
    res.send(db.addMessage(text, user)); 
}); 

