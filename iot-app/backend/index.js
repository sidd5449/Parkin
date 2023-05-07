import mongoose from 'mongoose';
import express from 'express';
import  dotenv from 'dotenv';
import cors from 'cors';
import { getSensData } from './controller.js';
import dataRouter from './routes/route.js';
import iotData from './schema.js';
import bookRouter from './routes/updateRoutes.js';
import getInfoRouter from './routes/getInfoRouter.js';



dotenv.config();

const app = express();
const PORT = 3001;
app.use(cors());
app.use('/', dataRouter);
app.use('/book', bookRouter);
app.use('/slot', getInfoRouter);
// const db = 'iotProj';

const dummy = [
    {
        id: 1,
        status: 1,
        booked: 1,
        
    },
    {
        id: 2,
        status: 0,
        booked: 1,
    },
    {
        id: 3,
        status: 1,
        booked: 0,
        
    },
    {
        id: 4,
        status: 1,
        booked: 1,
        
    },
    {
        id: 5,
        status: 0,
        booked: 1,

    },
    {
        id: 6,
        status: 0,
        booked: 0,

    },
]

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));
    // iotData.insertMany(dummy);

}).catch((err) => console.log(err.message))
