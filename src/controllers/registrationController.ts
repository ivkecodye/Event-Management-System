import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Register a user for an event
export const registerForEvent = async (req: Request, res: Response) => {
  const { userId, eventId } = req.body;

  try {
    const registration = await prisma.registration.create({
      data: { userId, eventId },
    });

    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ error: "Registration failed or already exists" });
  }
};

// Get all registrations (optional, for admin)
export const getAllRegistrations = async (_req: Request, res: Response) => {
  try {
    const registrations = await prisma.registration.findMany({
      include: { user: true, event: true },
    });

    res.json(registrations);
  } catch {
    res.status(500).json({ error: "Failed to fetch registrations" });
  }
};
