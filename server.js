import express, { json } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const data = [
  { id: 1, name: "Анкер однорозпірний", like: "yes", bookmark: "no" },
  { id: 2, name: "Анкер дворозпірний", like: "no", bookmark: "yes" },
  { id: 3, name: "Анкер", like: "yes", bookmark: "yes" },
  { id: 4, name: "Саморіз", like: "no", bookmark: "no" },
  { id: 5, name: "Такелаж", like: "no", bookmark: "yes" },
  { id: 6, name: "Гвинт", like: "yes", bookmark: "yes" },
];

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
