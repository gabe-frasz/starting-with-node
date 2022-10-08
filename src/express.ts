import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
