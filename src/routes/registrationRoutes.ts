import { Router } from "express";
import {
  registerForEvent,
  getAllRegistrations,
} from "../controllers/registrationController";

const router = Router();

router.post("/", registerForEvent); // POST /api/registrations
router.get("/", getAllRegistrations); // GET /api/registrations

export default router;
