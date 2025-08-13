import { Request, Response } from "express";
import { transcribeAudio } from "../services/transcriptionService";

export const createTranscription = async (req: Request, res: Response) => {
    try {
        const { audioUrl } = req.body;
        if (!audioUrl) {
            return res.status(400).json({ error: "audioUrl is required" });
        }
        const id = await transcribeAudio(audioUrl);
        return res.status(200).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to process transcription" });
    }
};
