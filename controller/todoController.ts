import { Request, Response } from "express";

export const addTodo = (req: Request, res: Response) => {
  try {
    const { task, deadline } = req.body;
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error creating",
    });
  }
};
