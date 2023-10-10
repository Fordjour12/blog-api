import { NextFunction, Request, Response } from "express";
import {
    allBlogPost,
    createBlogPost,
    deleteOnePost,
    oneBlogPost,
} from "./crud.service";

const createNewBlogPost = async (
    request: Request,
    response: Response,
    next: NextFunction,
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
        console.error(error)
        response.status(500).json({ error: "Error fetching blog posts" });
        next(error)

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
        response.status(500).json({ error: "Error fetching blog posts" });
        next(error);
    }
};
const getBlogPostById = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { id } = request.params;
    try {
        const post = await oneBlogPost({ id });
        if (!post) {
            return response.status(404).json({ error: "Blog post not found" });
        }

        response.json({ data: post });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Error fetching the blog post" });
        next(error);
    }
};

const updateBlogPost = (
    request: Request,
    response: Response,
    next: NextFunction
) => { };

const deleteBlogPostById = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { id } = request.params;

    try {
        await deleteOnePost({
            id,
        });
        response.status(204).json({
            data: {
                status: "success",
                message: "Content has been deleted",
            },
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Error deleting the blog post" });
        next(error);
    }
};

export {
    createNewBlogPost,
    deleteBlogPostById,
    getAllBlogPost,
    getBlogPostById,
    updateBlogPost,
};
