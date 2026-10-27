
## Travel Buddy
A full-stack travel companion and trip management web application featuring secure user authentication, responsive 3D card layouts, and dynamic database tracking for travel destinations and itineraries.

## Live Demo
Render Deployment: https://travel-buddy-als8.onrender.com/

UI Design Template: Adapted from FreeFrontend Pure CSS 3D Cards

## Features
User Authentication: Secure local login and registration powered by Passport.js, featuring session management and flash messaging for error handling.

Interactive 3D Card Layouts: Responsive, modern card UI styled with reactive 3D effects to showcase travel spots and experiences.

Dynamic Trip Tracking: Create, manage, and interact with travel plans and items stored securely in MongoDB.

REST API Endpoints: Public JSON endpoints for programmatic access to travel data.

Protected Routes: Middleware ensures that dashboard views and management actions are restricted to authenticated users.

## API Routes & Endpoints
GET / — Renders the main travel dashboard (requires authentication).

GET /login — Renders the user login form with flash message support.

POST /login — Authenticates user credentials via Passport local strategy.

GET /signup — Renders the new user registration form.

POST /signup — Registers a new user account.

GET /api/iconicMoment — Returns a JSON array containing all travel items in the database.

POST /addMoment — Submits new travel destination or moment data to MongoDB.

PUT /addBid — Updates activity entries and interactions.

DELETE /sold — Removes completed or deleted items from active tracking.

## How It Works
Authentication Flow: Users must sign up or log in before accessing the travel planner dashboard, with sessions managed securely through Express session middleware.

Database Persistence: Mongoose connects to MongoDB to store and retrieve travel documents and user states asynchronously.

UI Integration: Combines server-side EJS templating with responsive, reactive CSS 3D card structures to deliver an engaging visual experience.

## How to Set Up
Prerequisites
Node.js installed on your machine

A MongoDB database connection URI

## Installation Commands
Clone the repository:
git clone https://github.com/your-username/your-repo-name.git

Navigate into the project folder:
cd your-repo-name

Install dependencies:
npm install

Configure Environment Variables:
Create a .env file in the root directory and add your MongoDB connection string and port:
MONGODB_URI=your_mongodb_connection_string
PORT=8080

Run the application:
npm start

The server will start on http://localhost:8080 (or your configured port).

## Built With
Node.js

Express.js

MongoDB & Mongoose

Passport.js (Local Authentication)

Express Session & Connect Flash

EJS 

HTML5 & CSS3 (Pure CSS 3D Cards)















<img width="2553" height="1274" alt="image" src="https://github.com/user-attachments/assets/76c52f1f-dbe9-4d33-b7ea-523b27063687" />
