import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post";

const router = express.Router()

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.post("/:id",updatePost)


export default router