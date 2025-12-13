import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl shadow-md bg-white w-64">
      <h2 className="text-xl font-semibold">Counter</h2>
      <div className="text-4xl font-bold">{count}</div>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
        >
          ➖ Decrease
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          ➕ Increase
        </button>
      </div>
    </div>
  );
}
