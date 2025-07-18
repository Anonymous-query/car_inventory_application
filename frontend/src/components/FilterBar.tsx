interface FileterBarProps {
    filter: string;
    setFilter: (value: string) => void;
}

export const FilterBar: React.FC<FileterBarProps> = ({filter, setFilter}) =>{
    return (
        <div className="flex gap-4 my-4">
            {["All", "Available", "Sold"].map((status) => (
                <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-4 py-2 rounded ${
                        filter === status ? "bg-blue-600 text-white" : "bg-gray-200"
                    }`}
                >
                    {status}
                </button>
            ))}
        </div>
    )
}