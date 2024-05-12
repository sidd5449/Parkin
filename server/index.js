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
import toggleBarrierRouter from "./routes/toggleBarrierRouter.js";
import { WebSocketServer } from "ws";

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
    id: 5,
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
    unId: "978a9b59-e2a5-4d56-8856-0e9f89fd92de",
  },
  {
    id: 6,
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
    unId: "5839abe5-33a0-4f16-846b-fa2593da0a97",
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
app.use("/toggleBarrier", toggleBarrierRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));
    slotData.insertMany(data);
    // axios.post('http://localhost:6001/c2sInterface', data);
  })
  .catch((err) => console.log(err.message));

// module.exports = app;

// const wss = new WebSocketServer({ port: 8080 });
