# 🚗 Car Inventory Viewer – Full Stack Assignment

A full-stack car inventory viewer built using **FastAPI** (Python) and **React + TypeScript**. This app displays a list of cars and allows filtering based on their availability.

---

## 🗂 Project Structure

```
car-inventory-viewer/
├── backend/              # FastAPI backend
│   ├── main.py
│   └── requirements.txt
└── frontend/             # React + TypeScript frontend
    ├── src/
    │   ├── components/
    │   │   ├── CarList.tsx
    │   │   └── FilterBar.tsx
    │   ├── App.tsx
    │   ├── index.tsx
    │   └── types/
    │       └── Car.ts
    └── .env
```

---

## 🔧 Backend – FastAPI

### ✅ Features

- FastAPI application with a single endpoint: `GET /cars`
- Returns a static list of car objects with fields:
  - `id`: integer
  - `make`: string
  - `model`: string
  - `year`: integer
  - `available`: boolean
- All routes require the `x-device-type` HTTP header with value `"WebApp"` or else return `403 Forbidden`.

### 📦 Static Car Data

```json
[
  { "id": 1, "make": "Toyota", "model": "Camry", "year": 2021, "available": true },
  { "id": 2, "make": "Honda", "model": "Civic", "year": 2020, "available": false },
  { "id": 3, "make": "Ford", "model": "Mustang", "year": 2022, "available": true },
  { "id": 4, "make": "Chevrolet", "model": "Impala", "year": 2019, "available": false }
]
```

### ▶️ Running the Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🎨 Frontend – React + TypeScript

### ✅ Features

- Fetches car list from the backend API
- Displays car make, model, year, and availability status
- Filters:
  - **All** cars
  - **Available** cars
  - **Sold** cars
- Highlights:
  - ✅ Available → Green border or text
  - ❌ Sold → Gray or red

### 💡 TypeScript Interface

```ts
export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  available: boolean;
}
```

### 🌐 Environment Variable

Create a `.env` file in `frontend/` with:

```env
REACT_APP_API_BASE_URL=http://localhost:8000
```

This base URL is used to fetch data from the FastAPI backend.

### ▶️ Running the Frontend

```bash
cd frontend
npm install
npm start
```

---

## ⚠️ Request Header Requirement

All frontend API requests must include the header:

```http
x-device-type: WebApp
```

Failing to include this will result in a `403 Forbidden` response from the backend.

---

## 🧠 Bonus

- ✅ `.env` support for backend API URL
- ✅ Cleanly structured React components (`CarList`, `FilterBar`, etc.)

---

## 📜 License

This project is provided as a coding assignment and is not licensed for commercial use.
