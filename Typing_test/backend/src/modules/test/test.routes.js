import { Router } from "express";
import { authenticateToken } from "../../middleware/auth.middleware.js";
import { submitTestController, getUserTestsController } from "./test.controller.js";

const router = Router();

router.post("/submit", authenticateToken, submitTestController);
router.get("/my-tests", authenticateToken, getUserTestsController);

export default router;
