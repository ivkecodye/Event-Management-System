import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

const prisma = new PrismaClient();

// Get all events
export const getAllEvents = async (_req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      include: { creator: true },
    });
    res.json(events);
  } catch {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

// Get single event
export const getEventById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await prisma.event.findUnique({
      where: { id: Number(id) },
      include: { creator: true },
    });
    if (!event) {
      res.status(404).json({ error: "Event not found" });
      return;
    }
    res.json(event);
  } catch {
    res.status(500).json({ error: "Failed to fetch event" });
  }
};

// Create event (Admin only)
export const createEvent = async (req: Request, res: Response) => {
  const { title, description, date, location, createdBy } = req.body;
  try {
    const event = await prisma.event.create({
      data: { title, description, date: new Date(date), location, createdBy },
    });
    res.status(201).json(event);
  } catch {
    res.status(500).json({ error: "Failed to create event" });
  }
};

// Update event (Admin only)
export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, date, location } = req.body;
  try {
    const event = await prisma.event.update({
      where: { id: Number(id) },
      data: { title, description, date: new Date(date), location },
    });
    res.json(event);
  } catch {
    res.status(500).json({ error: "Failed to update event" });
  }
};

// Delete event (Admin only)
export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.event.delete({ where: { id: Number(id) } });
    res.json({ message: "Event deleted" });
  } catch {
    res.status(500).json({ error: "Failed to delete event" });
  }
};
