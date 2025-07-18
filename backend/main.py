from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CARS = [
    { "id": 1, "make": "Toyota", "model": "Camry", "year": 2021, "available": True },
    { "id": 2, "make": "Honda", "model": "Civic", "year": 2020, "available": False },
    { "id": 3, "make": "Ford", "model": "Mustang", "year": 2022, "available": True },
    { "id": 4, "make": "Chevrolet", "model": "Impala", "year": 2019, "available": False }
]

@app.middleware("http")
async def check_device_type_header(request: Request, call_next):
    if request.url.path != "/docs":
        device_type = request.headers.get("x-device-type")
        if device_type != "WebApp":
            return JSONResponse(status_code=403, content={"detail":"Forbidden"})
    return await call_next(request)

@app.get("/cars")
async def get_cars():
    return CARS