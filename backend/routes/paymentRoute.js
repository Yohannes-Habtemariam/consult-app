import express from "express";
import postPayment from "../controllers/paymentController.js";

const router = express.Router();


router.post("/", postPayment);


export default router;