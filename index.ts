import express, { Request, Response, json } from "express"
import prisma from "./src/helper/prisma.helper"
import blogRouter from "./src/blog/blog.routes"

const app = express()

app.use(json())


const PORT = process.env.PORT || 4999

app.get("/", (_request: Request, response: Response) => {
    response.send(
        `
        <h1>Blog Api </h1>
        <p>Welcome to the blog api ......🚀🚀🚀🚀🚀🚀🚀</p>
        `
    )
})



app.put('/posts/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const updatedPost = await prisma.blog.update({
            where: { id },
            data: {
                title,
                content,
            },
        });

        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating the blog post' });
    }
});



app.use("/api/v1/", blogRouter)

app.listen(PORT, () => {
    console.log(`Application starting on http://localhost:${PORT}`)
})
