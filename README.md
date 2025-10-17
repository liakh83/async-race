# 🏎️ Async Race — SPA for Car Racing Management

**Single Page Application** for managing a collection of radio-controlled cars:  
start and stop their engines, run races, and track results.  
Implements the requirements of the **Async Race** task.

> ⚠️ **Important:**  
> The UI (frontend) and server mock are stored in **separate repositories**.  
> To make the app work locally, you must **clone and run the server mock**.  
> See instructions below 👇

---

## 📘 Table of Contents
- [About the Project](#about-the-project)
- [Technologies](#technologies)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Quick Start (Local Setup)](#quick-start-local-setup)
- [Running the Server Mock](#running-the-server-mock)

---

## 🧩 About the Project

### The app provides:

- Two main views: **Garage** and **Winners**, each with pagination and persistent state.  
- **CRUD operations** for cars (`name`, `color`) and bulk generation of 100 random cars.  
- Engine **start/stop controls** and car movement animations.  
- A **Race** button to start all cars simultaneously and determine the winner.  
- **Winners table** showing number of wins and best time, with sorting and pagination.  
- Fully responsive design (works on screens ≥500 px).  

---

### ⚙️ Technologies

- **TypeScript** (strict typing, no `any`, no assertions)
- **Vanilla JS + TS** — no frameworks like React, Angular, Vue, etc.
- **Vite** — bundler used for local development
- **Bootstrap CSS** — for styling only
- **Modular architecture** separating API, UI, and state management

---

### 📁 Repository Structure

src/ # Source code (TypeScript, UI logic)
public/ # Static assets
README.md # This file
vite.config.ts, tsconfig.json, eslint configs
---

## 🧰 Prerequisites

- **Node.js** ≥ 16  
- **npm**
- **Server Mock** (must be cloned and running, see below)

---

## 🚀 Quick Start (Local Setup)

 ### 1️⃣ Clone the frontend repo
```bash
git clone https://github.com/liakh83/async-race
cd async-race
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Clone the server mock (required)
```bash
git clone https://github.com/mikhama/async-race-api
Start the server mock
``` 
