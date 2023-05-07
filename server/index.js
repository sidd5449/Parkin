import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fillRouter from './routes/fillRouter.js'
import releaseRouter from './routes/releaseRouter.js'
import axios from 'axios';
import iotData from './schema.js';

dotenv.config();
const app = express();
app.use(cors());

const PORT = 8080;
app.use('/fill', fillRouter);
app.use('/release', releaseRouter);

const dumData = [
    {
        id: 1,
        status: 1,
    },
    {
        id: 2,
        status: 1,
    },
    {
        id: 3,
        status: 1,
    },
    {
        id: 4,
        status: 1,
    },
    {
        id: 5,
        status: 1,
    },
    {
        id: 6,
        status: 1,
    },
]

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));
    setInterval(() => {
        axios.get('http://192.168.63.18/', {timeout: 10000}).then(({data}) => {
            console.log(data);
            data.map((item) => {
                if(item.occupied === 1){
                    axios.patch(`http://localhost:8080/fill/${item.id}`)
                }
                else if(item.occupied === 0){
                    axios.patch(`http://localhost:8080/release/${item.id}`)
                }
            })
        })
    }, 3000);

}).catch((err) => console.log(err.message));