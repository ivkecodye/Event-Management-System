import express from "express";
import { checkAdmin } from "../middleware/checkAdmin";

import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController";

const router = express.Router();

router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.post("/", checkAdmin, createEvent); // NOTE: Restrict to admin later
router.put("/:id", checkAdmin, updateEvent); // NOTE: Restrict to admin later
router.delete("/:id", checkAdmin, deleteEvent); // NOTE: Restrict to admin later

export default router;
