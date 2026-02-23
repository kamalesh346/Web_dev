import { Router } from "express";
import { authenticateToken } from "../../middleware/auth.middleware.js";
import { submitTestController, getUserTestsController } from "./test.controller.js";
import { submitTestSchema } from "./test.validation.js";
import { validate } from "../../middleware/validation.middleware.js";

const router = Router();

router.post("/submit", authenticateToken, validate(submitTestSchema),
 submitTestController);
router.get("/my-tests", authenticateToken, getUserTestsController);

export default router;
