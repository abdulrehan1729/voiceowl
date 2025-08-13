import axios from "axios";
import { Transcription } from "../models/Transcription";
import path from "path";
import fs from "fs";
import { retry } from "../utils/retry";

export const transcribeAudio = async (audioUrl: string) => {
    try {
        const audioFilePath = await downloadAudio(audioUrl);
        const transcription = await mockTranscription(audioFilePath);
        const record = await Transcription.create({
            audioUrl,
            trancriptionText: transcription,
            createdAt: new Date(),
        });
        return record._id;
    } catch (error) {
        console.error("Service failed", error);
    }
};

async function downloadAudio(audioUrl: string): Promise<any> {
    // check for the dummy and mocked urls to bypass the original logic
    if (audioUrl.includes("mock") || audioUrl.includes("sample") || audioUrl.includes("dummy")) {
        const mockFileName = `mock_audio_${Date.now()}.mp3`;
        const mockFilePath = path.join(__dirname, "../../temp", mockFileName);

        fs.mkdirSync(path.join(__dirname, "../../temp"), { recursive: true });
        fs.writeFileSync(mockFilePath, "");

        console.log(`Mock audio created: ${mockFilePath}`);
        return mockFilePath;
    }
    await retry(async () => {
        const response = await axios.get(audioUrl, { responseType: "arraybuffer" });
        if (response.status !== 200) {
            throw new Error("Failed to download audio. Status: " + response.status);
        }
        const fileName = `audio_${Date.now()}.mp3`;
        const filePath = path.join(__dirname, "../../temp", fileName);

        fs.mkdirSync(path.join(__dirname, "../../temp"), { recursive: true });
        fs.writeFileSync(filePath, response.data);

        console.log(`Audio downloaded: ${filePath}`);

        return filePath;
    });
}

async function mockTranscription(audioFilePath: string): Promise<string> {
    console.log(`Transcribing file: ${audioFilePath}`);
    return "Mock transcribed text";
}
