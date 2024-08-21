import express, { json } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Use CORS with specific origin(s) allowed
app.use(cors({
  origin: "*"  // Allow all origins (for testing purposes, but you might want to specify your domain)
}));

app.use(json());

// Sample data
const data = [
  { id: 1, name: "Анкер однорозпірний", like: "yes", bookmark: "no" },
  { id: 2, name: "Анкер дворозпірний", like: "no", bookmark: "yes" },
  { id: 3, name: "Анкер", like: "yes", bookmark: "yes" },
  { id: 4, name: "Саморіз", like: "no", bookmark: "no" },
  { id: 5, name: "Такелаж", like: "no", bookmark: "yes" },
  { id: 6, name: "Гвинт", like: "yes", bookmark: "yes" },
];

// GET endpoint to retrieve data
app.get("/data", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
