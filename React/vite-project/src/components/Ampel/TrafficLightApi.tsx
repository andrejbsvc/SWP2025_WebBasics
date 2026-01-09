import { TrafficLightResponse, TrafficLightState } from "./TrafficLight";

export async function fetchTrafficLight(): Promise<TrafficLightResponse> {
  // später: fetch("https://api.example.com/trafficlight")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Smart Traffic Light",
        state: Math.floor(Math.random() * 3 + 1) as TrafficLightState,
        history: Array.from({ length: 10 }).map((_, i) => ({
          time: `T-${10 - i}`,
          state: Math.floor(Math.random() * 3 + 1) as TrafficLightState,
        })),
      });
    }, 500);
  });
}
