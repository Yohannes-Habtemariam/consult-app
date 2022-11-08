import express from "express";
import adminIsAuthorized from "../middleware/authorizedAdmin.js";

const router = express.Router();
router.use(adminIsAuthorized) // Authority is only given to the "Admin"

router.post("/")
router.get("/");
router.patch("./");
router.delete("/:id");

export default router;