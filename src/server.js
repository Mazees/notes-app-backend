import express from "express";
import cors from "cors";
import routes from "./routes.js";
const app = express();
app.use(
  cors({
    origin: "https://notesapp-v1.dicodingacademy.com",
  }),
);
const port = 3000;
const host = "localhost";

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
