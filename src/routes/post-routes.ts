import express from "express";

import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post-controllers";

export const postRouter = express.Router();

// auth middleware -- here
postRouter.route("/").get(getPosts);
postRouter.route("/new-post").post(createPost);
postRouter.route("/:id").get(getPost).put(updatePost).delete(deletePost);
