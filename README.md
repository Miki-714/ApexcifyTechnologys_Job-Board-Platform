# ApexcifyTechnologys_Job Board Platform API

A robust, enterprise-ready RESTful API built with **Node.js**, **Express.js**, and **MongoDB Atlas**. This platform facilitates a seamless recruitment ecosystem, allowing Employers to manage job listings and Candidates to apply with real-time status tracking.

## 📝 Project Description

The **ApexcifyTechnologys_Job Board Platform** is a specialized backend solution designed to bridge the gap between top-tier talent and innovative employers. Developed with a focus on security, scalability, and clean code, this project handles the entire recruitment lifecycle—from job creation to final hiring decisions.

### 🎯 Objective
To provide a high-performance, developer-friendly infrastructure that manages complex relationships between user roles (Employers vs. Candidates), job listings, and multi-stage applications.

### 🏗️ Architectural Overview
The project is built using the **MVC (Model-View-Controller)** pattern to ensure a clean separation of concerns:
*   **Models**: Structured Mongoose schemas for Employers, Candidates, Jobs, and Applications.
*   **Controllers**: Core business logic, including hiring pipeline shifts and authentication.
*   **Routes**: RESTful entry points for frontend integration.

## 🚀 Key Features

*   **Dual Authentication**: Secure, role-based registration and login for both Employers and Candidates using JWT.
*   **Smart Recruitment Pipeline**: A "shifting" status system (Pending, Interviewing, Accepted, Rejected) to track candidate progress.
*   **Resume Management**: Integration with **Multer** for handling PDF resume uploads and storage.
*   **Advanced Job Filtering**: Public API endpoints with query support for location, job type, and keywords.
*   **Data Security**: Industry-standard password hashing via `bcryptjs`.

## 🛠️ Tech Stack

*   **Backend**: Node.js & Express.js
*   **Database**: MongoDB Atlas (Mongoose ODM)
*   **Authentication**: JSON Web Token (JWT)
*   **File Handling**: Multer

## 📂 Project Structure

```text
ApexcifyTechnologys_JobBoard/
├── controllers/      # Logic for Auth, Jobs, and Applications
├── middleware/       # JWT Auth verification & Multer file config
├── models/           # Database Schemas (Employer, Job, Candidate, App)
├── routes/           # API Endpoints
├── uploads/          # Physical storage for PDF resumes
├── .env              # Sensitive Environment Variables
└── server.js         # Application Entry Point
```

## ⚙️ Setup & Installation

1.  **Clone the Repo**
    ```bash
    git clone https://github.com/Miki-714/ApexcifyTechnologys_Job-Board-Platform.git
    cd ApexcifyTechnologys_Job-Board-Platform
    ```
2.  **Install Dependencies**
    ```bash
    npm install
    ```
3.  **Configure Environment Variables**
    Create a `.env` file in the root directory:
    
```env
    PORT=5000
    MONGO_URI=your_mongodb_atlas_uri
    JWT_SECRET=your_jwt_secret
    ```
4.  **Run the Platform**
    
```bash
    npm run dev
    ```

## 🔌 API Endpoints

### Authentication
*   `POST /api/register` - New user registration
*   `POST /api/login` - User login to receive JWT

### Jobs
*   `GET /api/jobs` - Public list (Supports query params: location, keyword)
*   `POST /api/jobs` - Post a new listing (Employer Only)

### Applications
*   `POST /api/applications/apply/:jobId` - Apply for job with PDF (Candidate Only)
*   `PATCH /api/applications/:appId/status` - Update hiring stage (Employer Only)
