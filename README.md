# ChillScape Backend

Backend for ChillScape application — platform for discovering travel locations.

## Tech Stack

- Node.js
- Express
- CORS
- dotenv

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Run in production

```bash
npm start
```

Server runs on:
http://localhost:3000

## Environment Variables

Create a `.env` file based on `.env.example`

- PORT
- MONGO_URL

## API

### Base endpoint

```
GET /
```

Response:

```json
{ "message": "Backend is running" }
```

## Deployment

Deployed on Render:
https://chillscape-backend.onrender.com

## Description

Backend for Chillscape application (Node.js, Express, MongoDB)

## Project Structure

- server.js — entry point

- routes/ — API routes
- controllers/ — request handling
- services/ — business logic
- models/ — database models
- middlewares/ — middleware (auth, errors)
- validations/ — request validation
- db/ — MongoDB connection
- utils/ — helpers
- constants/ — app constants

## Git Workflow

- Work in feature branches (`feature/...`, `fix/...`)
- Do not push directly to `main`
- Create a Pull Request for all changes
- At least 1 approval is required before merging
