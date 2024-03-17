import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Health check - OK!",
  });
});

app.listen(port, () => {
  console.log(`Server is live on port=${port}`);
});
