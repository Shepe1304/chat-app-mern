import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json()); // Middleware that allows you to extract json data out of the body

app.use("/api/auth", authRoutes); // must be below middleware

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectDB();
});
