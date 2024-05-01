import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import c2sRouter from "./routes/c2sRouter.js";
import bookRouter from "./routes/bookRouter.js";
import unbookRouter from "./routes/unbookRouter.js";
import getSlotsRouter from "./routes/getSlotsRouter.js";
import paymentRouter from "./routes/paymentRouter.js";
import createOrder from "./routes/createOrder.js";
import axios from "axios";
import slotData from "./schemas/slotData.js";
import spot from "./schemas/spot.js";
import { statusController } from "./middleware/statusController.js";
import slotByIdRouter from "./routes/slotByIdRouter.js";
import spotRouter from "./routes/spotRouter.js";
import spotByIdRouter from "./routes/spotByIdRouter.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 8080;

const dumData = [
  {
    id: "5039fff2-2ecf-40a2-978a-137e7e21ac84",
    name: "COEP Tech ENTC Parking",
    latitude: "18.531097289940604",
    longitude: "73.85508391340822",
  },
];
const data = [
  {
    id: 1,
    status: 0,
    spot: "5039fff2-2ecf-40a2-978a-137e7e21ac84",
    booked: 0,
    orderId: null,
    bookedFrom: null,
    bookedTo: null,
    vehicleNo: null,
    idNumber: null,
    lattitude: "18.531097289940604",
    longitude: "73.85508391340822",
  },
  {
    id: 2,
    status: 0,
    booked: 0,
    spot: "5039fff2-2ecf-40a2-978a-137e7e21ac84",
    orderId: null,
    bookedFrom: null,
    bookedTo: null,
    vehicleNo: null,
    idNumber: null,
    lattitude: "18.531097289940604",
    longitude: "73.85508391340822",
  },
  {
    id: 3,
    status: 0,
    booked: 0,
    spot: "5039fff2-2ecf-40a2-978a-137e7e21ac84",
    orderId: null,
    bookedFrom: null,
    bookedTo: null,
    vehicleNo: null,
    idNumber: null,
    lattitude: "18.531097289940604",
    longitude: "73.85508391340822",
  },
  {
    id: 4,
    status: 0,
    booked: 0,
    spot: "5039fff2-2ecf-40a2-978a-137e7e21ac84",
    orderId: null,
    bookedFrom: null,
    bookedTo: null,
    vehicleNo: null,
    idNumber: null,
    lattitude: "18.531097289940604",
    longitude: "73.85508391340822",
  },
];

app.use("/c2sInterface", c2sRouter);
app.get("/", statusController);
app.use("/book", bookRouter);
app.use("/unbook", unbookRouter);
app.use("/getSlots", getSlotsRouter);
app.use("/slot/", slotByIdRouter);
app.use("/create-order/", createOrder);
app.use("/pay", paymentRouter);
app.use("/spots", spotRouter);
app.use("/spot", spotByIdRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));
    // spot.insertMany(dumData);
    // axios.post('http://localhost:6001/c2sInterface', data);
  })
  .catch((err) => console.log(err.message));

// module.exports = app;
