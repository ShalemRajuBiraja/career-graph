# 🚀 CareerGraph

CareerGraph is a web application that helps users find suitable career paths based on their skills.

The application uses a graph database to match selected skills with different career paths and shows the matched skills, missing skills, and match percentage.

## ✨ Features

- 🎯 Select skills from different categories
- 💼 Get career recommendations based on selected skills
- 📊 View skill match percentage
- ✅ View matched skills
- 📚 View skills to improve
- 📱 Responsive design
- 🔔 Loading and error messages

## 🛠️ Technologies Used

### 💻 Frontend

- React.js
- JavaScript
- HTML
- CSS
- Bootstrap
- Axios
- React Router
- React Toastify

### ⚙️ Backend

- Java
- Spring Boot
- REST API
- Maven
- Neo4j Java Driver

### 🗄️ Database

- CognoDB Cloud
- Cypher

### 🔧 Tools

- VS Code
- Eclipse
- Postman
- Git
- GitHub

## 🔄 How It Works

```text
👤 User selects skills
        ↓
💻 React Frontend
        ↓
⚙️ Spring Boot REST API
        ↓
🗄️ CognoDB Graph Database
        ↓
🔍 Career Matching
        ↓
🎯 Career Results

## 🤔 Why a Graph Database?

Career information contains many relationships between skills, technologies, and careers.

A graph database makes it easier to store and find these relationships.

Example:

```text
Java ──► Spring Boot ──► Backend Developer
  │
  └────► Java Full Stack Developer

  ⚙️ Setup and Run
    cd frontend
    npm install
    npm run dev


## 📸 UI Screenshots

### 🏠 Home Page[Home Page](images/home.png)

### 🎯 Career Search
[Career Search](images/CareerPage.jpeg)

### 📊 Career Results
![Career Results](images/ResultPage.jpeg)