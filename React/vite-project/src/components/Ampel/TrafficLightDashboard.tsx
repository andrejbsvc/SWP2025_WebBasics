import { useEffect, useState } from "react";
import { fetchTrafficLight } from "./TrafficLightApi";
import { TrafficLightCard } from "./TrafficLightCard";
import { TrafficLightChart } from "./TrafficLightChart";
import type { TrafficLightResponse } from "./TrafficLight";

export function TrafficLightDashboard() {
  const [data, setData] = useState<TrafficLightResponse| null>(null);

  useEffect(() => {
    fetchTrafficLight().then(setData);
  }, []);

  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <TrafficLightCard state={data.state} />
      <TrafficLightChart history={data.history} />
    </div>
  );
}
