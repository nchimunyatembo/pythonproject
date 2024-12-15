//import
const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');



const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());

//set-up middleware
app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes)

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'app.html'));
});

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, 'login.html'));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at:${PORT}`)
});