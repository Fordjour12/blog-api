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

app.use("/api/v1/", blogRouter)

app.listen(PORT, () => {
    console.log(`Application starting on http://localhost:${PORT}`)
})
