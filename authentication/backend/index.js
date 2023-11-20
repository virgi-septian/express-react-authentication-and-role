import express, { Router } from'express';
import cors from'cors';
import session from'express-session';
import dotenv from'dotenv';
import db from './config/database.js'
import UserRoute from './routes/UserRoute.js'
import ProductRoute from './routes/ProductRoute.js'
import AuthRoute from'./routes/AuthRoute.js';

dotenv.config();

const app = express();

// (async() => {
//     await db.sync();
// })();

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
// app.get('/', (req, res) => {
//     res.send('Server is up and running.');
// });
app.use(express.urlencoded({ extended: false }));
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

app.listen(process.env.APP_PORT, () => {
    console.log('Server is running on port ' + process.env.APP_PORT);
});
