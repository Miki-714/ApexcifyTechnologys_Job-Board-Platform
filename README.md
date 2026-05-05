# ApexcifyTechnologys_Job Board Platform API

A robust, enterprise-ready RESTful API built with **Node.js**, **Express.js**, and **MongoDB Atlas**[cite: 1]. This platform facilitates a seamless recruitment ecosystem, allowing Employers to manage job listings and Candidates to apply with real-time status tracking[cite: 1].

## 📝 Project Description

The **ApexcifyTechnologys_Job Board Platform** is a specialized backend solution designed to bridge the gap between top-tier talent and innovative employers[cite: 1]. Developed with a focus on security, scalability, and clean code, this project handles the entire recruitment lifecycle—from job creation to final hiring decisions[cite: 1].

### 🎯 Objective
To provide a high-performance, developer-friendly infrastructure that manages complex relationships between user roles (Employers vs. Candidates), job listings, and multi-stage applications[cite: 1].

### 🏗️ Architectural Overview
The project is built using the **MVC (Model-View-Controller)** pattern to ensure a clean separation of concerns[cite: 1]:
*   **Models**: Structured Mongoose schemas for Employers, Candidates, Jobs, and Applications[cite: 1].
*   **Controllers**: Core business logic, including hiring pipeline shifts and authentication[cite: 1].
*   **Routes**: RESTful entry points for frontend integration[cite: 1].

## 🚀 Key Features

*   **Dual Authentication**: Secure, role-based registration and login for both Employers and Candidates using JWT[cite: 1].
*   **Smart Recruitment Pipeline**: A "shifting" status system (Pending, Interviewing, Accepted, Rejected) to track candidate progress[cite: 1].
*   **Resume Management**: Integration with **Multer** for handling PDF resume uploads and storage[cite: 1].
*   **Advanced Job Filtering**: Public API endpoints with query support for location, job type, and keywords[cite: 1].
*   **Data Security**: Industry-standard password hashing via `bcryptjs`[cite: 1].

## 🛠️ Tech Stack

*   **Backend**: Node.js & Express.js[cite: 1]
*   **Database**: MongoDB Atlas (Mongoose ODM)[cite: 1]
*   **Authentication**: JSON Web Token (JWT)[cite: 1]
*   **File Handling**: Multer[cite: 1]

## 📂 Project Structure

```text
ApexcifyTechnologys_JobBoard/
├── controllers/      # Logic for Auth, Jobs, and Applications[cite: 1]
├── middleware/       # JWT Auth verification & Multer file config[cite: 1]
├── models/           # Database Schemas (Employer, Job, Candidate, App)[cite: 1]
├── routes/           # API Endpoints[cite: 1]
├── uploads/          # Physical storage for PDF resumes[cite: 1]
├── .env              # Sensitive Environment Variables[cite: 1]
└── server.js         # Application Entry Point[cite: 1]
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
*   `POST /api/register` - New user registration[cite: 1]
*   `POST /api/login` - User login to receive JWT[cite: 1]

### Jobs
*   `GET /api/jobs` - Public list (Supports query params: location, keyword)[cite: 1]
*   `POST /api/jobs` - Post a new listing (Employer Only)[cite: 1]

### Applications
*   `POST /api/applications/apply/:jobId` - Apply for job with PDF (Candidate Only)[cite: 1]
*   `PATCH /api/applications/:appId/status` - Update hiring stage (Employer Only)[cite: 1]
