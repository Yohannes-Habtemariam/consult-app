import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

import registerRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js"; 
import usersRoute from "./routes/usersRoute.js";
import adminRoute from "./routes/adminRoute.js";
import servicesRoute from "./routes/servicesRoute.js";
import productsRoute from "./routes/productsRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";
import paymentRoute from "./routes/paymentRoute.js"
import globalErrorHandler from "./middleware/globalErrorHandler.js";


const app = express();
app.use(cors());
app.use(express.json());

dotenv.config(); // used to hide secrete keys 

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`);


mongoose.connection.on("open", () => console.log("Database connection established!"));
mongoose.connection.on("error", () => console.error); 

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/users", usersRoute);
app.use("/admin", adminRoute);
app.use("/services", servicesRoute);
app.use("/products", productsRoute);
app.use("/cart", cartRoute);
app.use("/order", orderRoute);
app.use("/payment", paymentRoute);

app.use(morgan("tiny"));

app.use(globalErrorHandler);

app.listen(process.env.PORT || 5000, () => {
    console.log(`The server has started on port ${process.env.PORT || 5000}`)
})