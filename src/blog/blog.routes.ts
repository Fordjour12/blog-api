import { Request, Response, Router } from "express";
import {
  createNewBlogPost,
  deleteBlogPostById,
  getAllBlogPost,
  getBlogPostById,
  updateBlogPost,
} from "./blog.controller";

const blogRouter = Router();

blogRouter.get("/blog", (_request: Request, response: Response) => {
  response.status(200).json({
    data: {
      status: "success",
      message: "welcome to the blog sections of api",
    },
  });
});

blogRouter.post("/blog/create/", createNewBlogPost);
blogRouter.get("/blog/post", getAllBlogPost);
blogRouter.get("/blog/post/:id", getBlogPostById);
blogRouter.put("/blog/post/:id", updateBlogPost);
blogRouter.delete("/blog/post/:id", deleteBlogPostById);

export default blogRouter;
