import express from "express";
import cors from "cors";

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

app.get("/", (req, res) => {
  return res.send("API working");
});

export default app;
