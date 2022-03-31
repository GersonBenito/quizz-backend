const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./src/routes/routes');
const { dbConnect } = require('./src/database/connect');

const app = express();

dbConnect();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});

