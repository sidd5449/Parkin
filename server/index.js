const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const c2sRouter = require('./routes/c2sRouter.js');
const bookRouter = require( "./routes/bookRouter.js");
const unbookRouter = require( "./routes/unbookRouter.js");
const getSlotsRouter = require( "./routes/getSlotsRouter.js");
const axios = require( 'axios');
const slotData = require( './schemas/slotData.js');
const { statusController } = require( './middleware/statusController.js');

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

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));
    // slotData.insertMany(data);
    // axios.post('http://localhost:6001/c2sInterface', data);
}).catch((err) => console.log(err.message));

module.exports = app;