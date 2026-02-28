# Rose Lerato Melato | Sorting API Developer Task

## Overview
This project implements a **full-stack solution** for a developer task. 
The task required creating a **server-side API** that receives a string via a POST request, converts it into an array of characters, sorts them alphabetically, 
and returns the sorted array in JSON format:
**{ "word": ["a","e","e","l","m","p","x"] }**

Additionally, the bonus task was completed by creating an interactive frontend that allows testing the API with:
- Email address
- API URL
- String to sort

**Features**
**Backend API** – POST endpoint /sort-word that validates input, sorts characters, and returns JSON.
**Interactive Frontend** – Form to input Email, API URL, and string, displaying JSON response dynamically.
**Exact Task Compliance** – Output matches { "word": [...] } format requested by recruiters.
**Error Handling **– Handles invalid input gracefully with clear error messages.
**Deployment-Ready **– Backend on Render, frontend on GitHub Pages for public access and testing.

**Technologies**
- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js, Express.js
- Deployment: Render (Backend), GitHub Pages (Frontend)
- Version Control: Git, GitHub

**Backend Architecture**
1. Receives string input via POST /sort-word endpoint.
2. Converts string into an array of characters (["e","x","a","m","p","l","e"]).
3. Sorts alphabetically and returns JSON { word: [...] }.
4. Validates input and returns errors for invalid data.

**Frontend Architecture (Bonus)**
- Interactive form for testing API: Email, API URL, and string input.
- Fetches backend response and displays it in { "word": [...] } format.
- Can be opened locally or deployed on GitHub Pages.
- Handles CORS and fetch errors.

**License**
This project is intended for developer task submission.

**Contact**
email: rosemelato25@gmail.com
Location: Johannesburg, South Africa
