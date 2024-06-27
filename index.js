import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/userRoute.js';

const app = express();

// const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL="mongodb+srv://Vasantha:Vasantha@cluster0.fb9oqdm.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0";
const MONGOSURL = process.env.MONGO_URL;



app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Database Connected Successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch(error => console.log(error));

app.use('/api/users', route);
