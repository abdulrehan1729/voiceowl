# 📌 VoiceOwl Backend API

> Minimal Node.js + TypeScript API for mocking audio transcription and storing results in MongoDB.

---

## 📖 Table of Contents

-   [About](#about)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Project Structure](#project-structure)
-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Usage](#usage)
-   [API Endpoints](#api-endpoints)
-   [Testing](#testing)
-   [License](#license)

---

## ✨ Features

-   Accepts audio file URL and returns dummy transcription.
-   Stores transcription with timestamp in MongoDB.
-   Retry mechanism for failed downloads.
-   Environment variable configuration.
-   Unit testing with Jest + Supertest.

---

## 🛠 Tech Stack

-   **Backend:** Node.js, TypeScript, Express
-   **Database:** MongoDB (via Mongoose)
-   **HTTP Client:** Axios
-   **Testing:** Jest, Supertest
-   **Env Config:** dotenv

---

## 📂 Project Structure

```
src/
 ├── config/            # Database connection
 ├── controllers/       # Handles requests/responses
 ├── models/            # Mongoose schemas
 ├── routes/            # API route definitions
 ├── services/          # Business logic
 ├── utils/             # Helper functions
 ├── app.ts              # App setup
 └── index.ts            # Server entry
```

---

## 🧩 Code Structure Explanation

-   **config/**: Handles database connection logic.
-   **controllers/**: Receives HTTP requests, validates input, and calls the appropriate service functions.
-   **models/**: Defines MongoDB schemas and models using Mongoose.
-   **routes/**: Maps API endpoints to controller functions.
-   **services/**: Contains business logic (mock audio download, transcription, and DB save).
-   **utils/**: Helper utilities like retry logic for failed downloads.
-   **types/**: TypeScript interfaces for request/response typing.
-   **app.ts**: Configures the Express app with middleware and routes.
-   **index.ts**: Starts the server and connects to MongoDB.

---

## 📝 Assumptions

-   The audio file URL provided is publicly accessible and returns a valid audio file.
-   Actual transcription logic is not implemented; it is mocked as `"transcribed text"`.
-   MongoDB is either running locally or via MongoDB Atlas, and connection details are provided in `.env`.
-   No authentication is required for the `/api/transcription` endpoint in this version.

---

## 🚀 Improvements for Production

-   **Authentication & Authorization**: Implement JWT or OAuth2 for secure API access.
-   **Real Transcription Service**: Integrate with an actual speech-to-text API like Google Speech-to-Text or AWS Transcribe.
-   **File Validation**: Ensure the provided URL points to a valid audio format before processing.
-   **Error Logging**: Use a logging library (e.g., Winston or Pino) for better error tracking.
-   **Rate Limiting**: Prevent abuse by adding rate-limiting middleware.
-   **Cloud Storage**: Store audio files in S3 or similar before transcription.
-   **Containerization**: Package using Docker for consistent deployment.
-   **CI/CD Pipeline**: Automate testing and deployment.

## ⚙️ Installation

```bash
# Clone repository
git clone https://github.com/yourusername/voiceowl.git
cd voiceowl

# Install dependencies
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the root with:

```env
PORT=8080
MONGO_URI=mongodb://localhost:27017/voiceowl
```

---

## 🚀 Usage

```bash
# Start development server
npm run dev
```

Server will run at `http://localhost:8080`.

---

## 📡 API Endpoints

### **POST** `/api/transcription`

**Request Body**

```json
{
    "audioUrl": "https://example.com/sample.mp3"
}
```

**Response**

```json
{
    "id": "64e3b9f2d3e9b9f9b7d6a2c1"
}
```

---

## 🧪 Testing

```bash
npm test
```

---
