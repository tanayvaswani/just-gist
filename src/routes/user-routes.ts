import express, { Request, Response } from "express";

export const userRouter = express.Router();

userRouter.route("/sign-in").get((req: Request, res: Response) => {
  res.status(200).json({ message: "Sign In Route" });
});

userRouter.route("/sign-up").get((req: Request, res: Response) => {
  res.status(200).json({ message: "Sign Up Route" });
});

userRouter.route("/profile").get((req: Request, res: Response) => {
  res.status(200).json({ message: "User Profile" });
});
