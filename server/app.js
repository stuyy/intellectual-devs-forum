require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3524;
const app = express();
const db = require('./database/db')();

db.on('error', () => console.log('connection error'));
db.once('open', () => console.log('connected to DB.'))

const passport = require('passport');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(cors({
    origin: ['http://localhost:4200/login', 'localhost:4200/login', 'localhost:4200/', 'http://localhost:4200'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false,
    resave: true,
    cookie: { maxAge: 60000 * 60 * 24 * 365 },
    store: new MongoStore({ mongooseConnection: db })
}));

app.use(passport.initialize());
app.use(passport.session());

require('./utils/RouteHandler').bind(app)();

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));