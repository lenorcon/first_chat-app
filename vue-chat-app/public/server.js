const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '',
    database: 'chat_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    res.send('Welcome to the registration page!');
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { username, email, password: hashedPassword };

    db.query('INSERT INTO users SET ?', user, (err, results) => {
        if (err) {
            console.log(err);
            res.send('Registration failed.');
        } else {
            console.log(results);
            res.send('Registration successful.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { username,  password: hashedPassword };

    db.query('INSERT INTO users SET ?', user, (err, results) => {
        if (err) {
            console.log(err);
            res.send('login failed.');
        } else {
            console.log(results);
            res.send('login successful.');
        }
    });
});


