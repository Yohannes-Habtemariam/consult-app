import express from "express";
import userIsAuthorized from "../middleware/authorizedUser.js";

const router = express.Router();
router.use(userIsAuthorized); // The authorized body is user.

router.post("/");
router.delete("/:id");

export default router;