import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export default function Cars() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('http://localhost:3000/cars');
                if (!response.ok) {
                    throw new Error('Failed to fetch cars');
                }
                const data = await response.json();
                setCars(data);
            }
            catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            }
            finally {
                setLoading(false);
            }
        };
        fetchCars();
    }, []);
    if (loading)
        return _jsx("div", { children: "Loading cars..." });
    if (error)
        return _jsxs("div", { children: ["Error: ", error] });
    return (_jsxs("div", { children: [_jsx("h1", { children: "Cars" }), cars.length === 0 ? (_jsx("p", { children: "No cars found." })) : (_jsx("ul", { children: cars.map((car) => (_jsxs("li", { children: [car.brand, " ", car.model, " ", car.year && `(${car.year})`] }, car.id))) }))] }));
}
//# sourceMappingURL=Cars.js.map