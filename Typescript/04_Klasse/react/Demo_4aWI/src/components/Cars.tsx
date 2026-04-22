import { useEffect, useState } from 'react';

interface Car {
  id: number;
  brand: string;
  model: string;
  year?: number;
}

export default function Cars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:3000/cars');
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const data = await response.json();
        setCars(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <div>Loading cars...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Cars</h1>
      {cars.length === 0 ? (
        <p>No cars found.</p>
      ) : (
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              {car.brand} {car.model} {car.year && `(${car.year})`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
