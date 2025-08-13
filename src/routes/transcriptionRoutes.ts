import { Router } from "express";
import { createTranscription } from "../controller/transcriptionController";

const transcriptionRouter = Router();
transcriptionRouter.post("/transcription", createTranscription);

export default transcriptionRouter;
