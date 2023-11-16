const express = require('express');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv'); 
dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto',
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

app.use(express.json());

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and Running ..');
});