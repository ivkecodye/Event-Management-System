import express from "express";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import eventRoutes from "./routes/eventRoutes";
import registrationRoutes from "./routes/registrationRoutes";
import path from "path";
import expressLayouts from "express-ejs-layouts";

const app = express();
const PORT = 3000;
const prisma = new PrismaClient();

app.use(express.json());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes);
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", path.join(__dirname, "views", "layout"));

//Frontend Routes
app.get("/", (_req, res) => {
  res.render("index", { title: "Home" });
});
app.get("/login", (_req, res) => {
  res.render("login", { title: "Login" });
});
app.get("/register", (_req, res) => {
  res.render("register", { title: "Register" });
});
app.get("/events", async (_req, res) => {
  const events = await prisma.event.findMany({
    include: { creator: true },
  });
  res.render("events", { title: "Events", events });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
