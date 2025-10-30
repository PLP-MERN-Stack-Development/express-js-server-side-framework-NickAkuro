const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

//middleware to parse JSON
app.use(express.json());

//Connect to Database
connectDB();

//Define Routes
app.use('/products', require('./routes/ProductsRoutes'));

//Default Route
app.get('/', (req, res) => {
    res.send('Hello World...');
});

//Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>  console.log(`Server running on http://localhost:${PORT}`));