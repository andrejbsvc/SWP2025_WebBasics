import { useState } from "react";

export default function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`flex flex-col items-center gap-4 p-6 rounded-2xl shadow-md w-64 transition-colors ${
        isOn ? "bg-yellow-300" : "bg-gray-300"
      }`}
    >
      <div className="text-6xl">
        {isOn ? "💡" : "💡"}
      </div>

      <button
        onClick={() => setIsOn(!isOn)}
        className="px-4 py-2 rounded-xl bg-white shadow hover:bg-gray-100 transition"
      >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}
