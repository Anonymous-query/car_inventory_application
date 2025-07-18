import type { Car } from "../types/Car";

export async function fetchCars(): Promise<Car[]> {
    // const response = await fetch(`${import.meta.env.API_URL}/cars}`, {
    const response = await fetch('http://127.0.0.1:8000/cars', {
        headers: {
            "x-device-type": "WebApp"
        }
    });
    if(!response.ok) throw new Error("Failed to fetch cars!");
    return response.json();
}