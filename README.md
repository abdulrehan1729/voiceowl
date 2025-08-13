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
