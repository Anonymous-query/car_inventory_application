import { useEffect, useState } from 'react';
import './App.css';
import { CarList } from './components/CarList'; // adjust path as needed
import type { Car } from './types/Car';
import {FilterBar} from './components/FilterBar';
import { fetchCars } from './utils/api'; 

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchCars()
    .then(setCars)
    .catch((err) => console.error(err));
  }, []);

  const filteredCars = 
    filter === "All"
    ? cars
    : filter == "Available"
    ? cars.filter((car) => car.available)
    : cars.filter((car) => !car.available);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Car Inventory</h1>
      <FilterBar filter={filter} setFilter={setFilter}/>
      <CarList cars={filteredCars} />
    </div>
  );
}

export default App;