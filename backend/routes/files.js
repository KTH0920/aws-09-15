import { Router } from "express";
import { nanoid } from "nanoid";
import FileItem from "../models/FileItem.js";
import { presignGet, presignPut, deleteObject } from "../src/s3.js";

const router = Router();

router.post("/presign", async (req, res) => {
  try {
    const {filename, contentType} = req.body
  } catch (error) {}
});

export default router;
