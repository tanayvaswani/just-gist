import express, { Request, Response } from "express";
import dotenv from "dotenv";

import { userRouter } from "./routes/user-routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/v1/user", userRouter);

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Health check - OK!",
  });
});

app.listen(port, () => {
  console.log(`Server is live on PORT -- ${port}`);
});
