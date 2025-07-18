import type {Car} from "../types/Car"

interface CarListProps {
    cars: Car[];
}

export const CarList: React.FC<CarListProps> = ({cars}) =>{
    console.log("hhh",cars)
    return (
    <div className="flex flex-wrap gap-4">
      {cars.map((car) => (
        <div
          key={car.id}
          className="w-60 p-4 border rounded shadow bg-white hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-1">
            {car.make} {car.model}
          </h2>
          <p className="text-gray-700 mb-1">Year: {car.year}</p>
          <p
            className={`text-sm font-medium ${
              car.available ? "text-green-600" : "text-red-600"
            }`}
          >
            {car.available ? "Available" : "Sold"}
          </p>
        </div>
      ))}
    </div>
  );
};