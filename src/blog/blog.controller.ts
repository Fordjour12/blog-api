import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextFunction, Request, Response } from "express";
import { allBlogPost, createBlogPost, oneBlogPost } from "./crud.service";

const createNewBlogPost = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { title, content, image, authour } = request.body;

    try {
        const newPost = await createBlogPost({
            title,
            content,
            image,
            authour,
        });

        response.status(201).json({ data: newPost });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                return response.status(409).json({
                    status: "fail",
                    message: "post already exists",
                });
            }
        }
        console.error("error:", error);
        next(error);
    }
};

const getAllBlogPost = async (
    _request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const posts = await allBlogPost();
        response.json({ data: posts });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Error fetching blog posts' });
        next(error)
    }
};
const getBlogPostById = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { id } = request.params
    try {
        const post = await oneBlogPost({id})
        if (!post) {
            return response.status(404).json({ error: 'Blog post not found' });
        }

        response.json({ data: post });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Error fetching the blog post' });
        next(error)
    }

};

const updateBlogPost = (
    request: Request,
    response: Response,
    next: NextFunction
) => { };

const deleteBlogPostById = (
    request: Request,
    respone: Response,
    next: NextFunction
) => { };

export {
    createNewBlogPost,
    deleteBlogPostById,
    getAllBlogPost,
    getBlogPostById,
    updateBlogPost,
};
