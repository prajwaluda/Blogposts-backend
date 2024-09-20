import express from "express";
import {postBlog} from "../controllers/blogs.js"
import { getBlog } from "../controllers/blogs.js";

const router =express.Router();

router.post("/addBlog", postBlog);
router.get("/readBlog", getBlog);

export default router;