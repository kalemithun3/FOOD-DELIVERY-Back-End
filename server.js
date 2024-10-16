//server.js file
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';



// app connfig
const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get('/', (req, res) => {
    res.send("API  is working");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

//mongodb+srv://mithunkale07:JubDbMeDlcuvLpPm@cluster0.rft5u.mongodb.net/?