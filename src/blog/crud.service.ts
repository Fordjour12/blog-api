import { Prisma } from "@prisma/client";
import prisma from "../helper/prisma.helper";

const createBlogPost = async (input: Prisma.BlogCreateInput) => {
  const createdPost = await prisma.blog.create({ data: input });
  return createdPost;
};

const allBlogPost = async () => {
  const allPost = await prisma.blog.findMany();
  return allPost;
};

const oneBlogPost = async (id: Prisma.BlogWhereUniqueInput) => {
  const onePost = await prisma.blog.findUnique({
    where: id,
  });
  return onePost;
};

const deleteOnePost = async (id: Prisma.BlogWhereUniqueInput) => {
  const deletePost = await prisma.blog.findUnique({
    where: id,
  });
};

const updateBlog = async (
  input: Prisma.BlogUpdateInput,
  where: Prisma.BlogWhereUniqueInput
) => {
  const updatePost = await prisma.blog.update({
    where,
    data: input,
  });
  return updatePost;
};

export { allBlogPost, createBlogPost, deleteOnePost, oneBlogPost, updateBlog };
