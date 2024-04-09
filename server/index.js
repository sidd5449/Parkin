import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import c2sRouter from './routes/c2sRouter.js';
import bookRouter from "./routes/bookRouter.js";
import unbookRouter from "./routes/unbookRouter.js";
import getSlotsRouter from "./routes/getSlotsRouter.js";
import axios from 'axios';
import slotData from './schemas/slotData.js';
import { statusController } from './middleware/statusController.js';
import slotByIdRouter from './routes/slotByIdRouter.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));

const PORT = process.env.PORT || 8080;

// const dumData = [
//     {
//         id: 1,
//         status: 1,
//     },
//     {
//         id: 2,
//         status: 1,
//     },
//     {
//         id: 3,
//         status: 1,
//     },
//     {
//         id: 4,
//         status: 1,
//     },
//     {
//         id: 5,
//         status: 1,
//     },
//     {
//         id: 6,
//         status: 1,
//     },
// ]
const data = [
    {
        id:1,
        status:0,
        booked:0,
    },
    {
        id:2,
        status:0,
        booked:0,
    },
    {
        id:3,
        status:0,
        booked:0,
    },
    {
        id:4,
        status:0,
        booked:0,
    },
]

app.use("/c2sInterface", c2sRouter);
app.get("/", statusController);
app.use("/book", bookRouter);
app.use("/unbook",unbookRouter);
app.use("/getSlots", getSlotsRouter);
app.use("/slot/", slotByIdRouter);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));
    // slotData.insertMany(data);
    // axios.post('http://localhost:6001/c2sInterface', data);
}).catch((err) => console.log(err.message));

// module.exports = app;