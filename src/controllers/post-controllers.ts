import { Request, Response } from "express";

import prisma from "../prisma/client";

export const getPosts = async (req: Request, res: Response) => {
  const allPosts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: true,
    },
  });

  res.json(allPosts);
};

export const getPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(post);
};

export const createPost = async (req: Request, res: Response) => {
  const { title, description, authorEmail } = req.body;
  const result = await prisma.post.create({
    data: {
      title,
      description,
      published: false,
      author: {
        connect: {
          email: authorEmail,
        },
      },
    },
  });

  res.json(result);
};

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: { published: true },
  });

  res.json(post);
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });

  res.json(post);
};
