const express = require('express');
const chats = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');

// Creating instance of express
const app = express();

// Using dotenv
dotenv.config();
connectDB();
// Creating api
app.get('/', (req, res) => {
    res.send("Api is running successfully");
});

app.get('/api/chat', (req, res) => {
    res.send(chats)
});

app.get('/api/chat/:id', (req, res) => {
    // console.log(req);
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
});

// Starting our server

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`.yellow.bold));

