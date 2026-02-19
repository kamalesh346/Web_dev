import express from "express";
import { signup, login, profile } from "./controller.js";
import { authenticateToken } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile",authenticateToken, profile)

export default router;
