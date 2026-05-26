require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');


const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND

const corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/api/products', productRoute);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.use(errorMiddleware);

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


