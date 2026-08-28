# Authentication Note App - Backend

A secure backend RESTful API built for a note-taking application featuring user authentication and database management.

## Features

- **User Authentication:** Secure user signup, login, and authorization.
- **Note Management (CRUD):** Endpoints to create, read, update, and delete notes.
- **Database Integration:** Connected with MongoDB using Mongoose schemas.
- **Cloud Hosted:** Deployed live on Render.

## Live API URL

- **Base URL:** [https://authentication-note-app-1.onrender.com](https://authentication-note-app-1.onrender.com)

## Tech Stack & Dependencies

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database & ODM:** MongoDB, Mongoose
- **Authentication & Security:** 
                             - `jsonwebtoken` (JWT for session/token-based auth)
                             - `bcrypt` (For secure password hashing)
- **Environment Management:** `dotenv`
- **Deployment:** Render

## API Endpoints (Postman Testing)

- **Register:** `POST /api/v1/users/signup` 
- **Login:** `POST /api/v1/users/login`

- **Create Note:** `POST /api/v1/notes/`
- **Read All Note:** `GET /api/v1/notes/`
- **Read single Note:** `GET /api/v1/notes/:id`
- **Update Note:** `PATCH /api/v1/notes/:id`
- **Delete Note:** `DELETE /api/v1/notes/:id`

## Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Rashid-818/Authentication-Note-App.git](https://github.com/Rashid-818/Authentication-Note-App.git)
   cd Authentication-Note-App