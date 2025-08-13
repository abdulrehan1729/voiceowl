import mongoose, { Document, Schema } from "mongoose";

export interface ITranscription extends Document {
    audioUrl: string;
    trancriptionText: string;
    createdAt: Date;
}

const transcriptionSchema = new Schema<ITranscription>({
    audioUrl: { type: String, required: true },
    trancriptionText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const Transcription = mongoose.model<ITranscription>("Transcription", transcriptionSchema);
