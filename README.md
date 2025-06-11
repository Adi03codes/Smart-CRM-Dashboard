# Smart-CRM-Dashboard



A simplified, full-stack CRM (Customer Relationship Management) dashboard inspired by Salesforce, built with **React.js**, **Node.js**, **Express**, and **MongoDB**.

## 📊 Features

- 🔹 Manage Contacts: Add, view, and list customer contacts
- 🔹 Manage Leads: Create leads and link them to contacts
- 🔹 Track Lead Status: Update lead lifecycle (New → Contacted → Won/Lost)
- 🔹 Visual Dashboard: Neatly organized contact and lead cards
- 🔹 REST API Backend with Express
- 🔹 Tailwind CSS for modern responsive UI
- 🔹 Real-time state update using React Hooks

---

## 🛠️ Tech Stack

| Frontend        | Backend        | Database   | Styling     |
|----------------|----------------|------------|-------------|
| React.js        | Node.js (Express) | MongoDB     | Tailwind CSS |

---

## 🙋‍♂️ What I Did

As a developer for this project, I:

- ✅ Designed and implemented a full-stack CRM system.
- ✅ Built the backend using Node.js and Express, including routes and MongoDB schema models for contacts and leads.
- ✅ Developed RESTful APIs to perform CRUD operations for contacts and leads.
- ✅ Integrated MongoDB using Mongoose and connected it with Express server.
- ✅ Designed the frontend using React.js and Tailwind CSS.
- ✅ Used Axios to connect the frontend to backend APIs and display dynamic data.
- ✅ Implemented real-time state updates using React Hooks (`useEffect`, `useState`).
- ✅ Focused on responsiveness and clean UI with Tailwind CSS.
- ✅ Ensured modular code structure with maintainable folders for scalability.

---

## 📦 Installation

### ✅ Prerequisites

- Node.js + npm
- MongoDB (local or Atlas)
- Git

### ⚙️ Backend Setup

```bash
cd backend
npm install
touch .env
```

In `.env`, add:

```
MONGO_URI=mongodb://localhost:27017/smart_crm
```

Start the backend:

```bash
node server.js
```

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm start
```

The app will open at: `http://localhost:3000`

---

## 🗂️ Project Structure

```
smart-crm-dashboard/
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   └── tailwind.config.js
├── README.md
```

---



---

## ✅ Future Improvements

- Authentication system (admin/sales)
- Charts and analytics (Recharts)
- Lead filtering and sorting
- Notifications for lead stage changes
- Deployment to Render/Vercel

---
