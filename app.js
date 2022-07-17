const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnect } = require('./config/mongo');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

// endpoints
const routes = require('./app/routes/routes');
app.use('/api', routes);

dbConnect();

app.listen(PORT, () => console.log('API listen on port ', PORT));

