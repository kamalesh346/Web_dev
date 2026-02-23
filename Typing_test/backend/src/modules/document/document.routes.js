import { Router } from "express";
import { getRandomDocumentController } from "./document.controller.js";
import { authenticateToken } from "../../middleware/auth.middleware.js";
import { validateDifficultyQuery } from "./document.validation.js";

const router = Router();

router.get("/random", authenticateToken, validateDifficultyQuery,getRandomDocumentController);

export default router;