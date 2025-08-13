import request from "supertest";
import app from "../app";
import mongoose from "mongoose";

// Mock external dependencies here if needed
jest.mock("../services/transcriptionService", () => ({
    transcribeAudio: jest.fn(() => Promise.resolve("mocked-transcription-id")),
}));

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI || "");
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe("POST /api/transcription", () => {
    it("should return an id for a valid audio URL", async () => {
        const res = await request(app)
            .post("/api/transcription")
            .send({ audioUrl: "https://example.com/sample.mp3" })
            .set("Content-Type", "application/json");
        console.log(res.body);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("id");
        expect(typeof res.body.id).toBe("string");
    });
});
