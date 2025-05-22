import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

const prisma = new PrismaClient();

export const checkAdmin: RequestHandler = async (req, res, next) => {
  const { createdBy, userId } = req.body;
  const id = createdBy || userId;

  if (!id) {
    res.status(400).json({ error: "User ID required for admin check" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user || user.role !== "ADMIN") {
      res.status(403).json({ error: "Not authorized - Admins only" });
      return;
    }
    next();
  } catch {
    res.status(500).json({ error: "Authorization failed" });
  }
};
