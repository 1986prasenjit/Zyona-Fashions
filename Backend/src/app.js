import express from "express";
import cors from "cors";

//User Routes
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "process.env.BASE_URL",
    methods: ["GET", "PUT", "POST", "DELETE", "UPDATE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
//User Routes
app.use("/api/v1/user", userRoutes);

export default app;
