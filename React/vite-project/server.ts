import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// In-memory data store
interface TrafficLightData {
  id: number;
  name: string;
  currentState: "red" | "yellow" | "green";
  statistics: {
    red: number;
    yellow: number;
    green: number;
  };
}

let trafficLights: TrafficLightData[] = [
  {
    id: 1,
    name: "Ampel 1",
    currentState: "red",
    statistics: { red: 0, yellow: 0, green: 0 },
  },
  {
    id: 2,
    name: "Ampel 2",
    currentState: "green",
    statistics: { red: 0, yellow: 0, green: 0 },
  },
  {
    id: 3,
    name: "Ampel 3",
    currentState: "yellow",
    statistics: { red: 0, yellow: 0, green: 0 },
  },
  {
    id: 4,
    name: "Ampel 4",
    currentState: "red",
    statistics: { red: 0, yellow: 0, green: 0 },
  },
];

// GET all traffic lights
app.get("/api/traffic-lights", (req, res) => {
  res.json(trafficLights);
});

// GET single traffic light
app.get("/api/traffic-lights/:id", (req, res) => {
  const light = trafficLights.find((l) => l.id === parseInt(req.params.id));
  if (!light) {
    return res.status(404).json({ error: "Traffic light not found" });
  }
  res.json(light);
});

// PUT - Cycle traffic light state
app.put("/api/traffic-lights/:id/cycle", (req, res) => {
  const light = trafficLights.find((l) => l.id === parseInt(req.params.id));
  if (!light) {
    return res.status(404).json({ error: "Traffic light not found" });
  }

  let newState: "red" | "yellow" | "green";
  switch (light.currentState) {
    case "red":
      newState = "green";
      light.statistics.green += 1;
      break;
    case "green":
      newState = "yellow";
      light.statistics.yellow += 1;
      break;
    case "yellow":
      newState = "red";
      light.statistics.red += 1;
      break;
  }

  light.currentState = newState;
  res.json(light);
});

// PUT - Reset statistics for single traffic light
app.put("/api/traffic-lights/:id/reset", (req, res) => {
  const light = trafficLights.find((l) => l.id === parseInt(req.params.id));
  if (!light) {
    return res.status(404).json({ error: "Traffic light not found" });
  }

  light.statistics = { red: 0, yellow: 0, green: 0 };
  res.json(light);
});

// PUT - Reset all statistics
app.put("/api/traffic-lights/reset/all", (req, res) => {
  trafficLights = trafficLights.map((light) => ({
    ...light,
    statistics: { red: 0, yellow: 0, green: 0 },
  }));
  res.json(trafficLights);
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚦 Traffic Light API Server running on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`GET /api/traffic-lights - Get all traffic lights`);
  console.log(`GET /api/traffic-lights/:id - Get single traffic light`);
  console.log(`PUT /api/traffic-lights/:id/cycle - Cycle traffic light state`);
  console.log(`PUT /api/traffic-lights/:id/reset - Reset single traffic light`);
  console.log(`PUT /api/traffic-lights/reset/all - Reset all traffic lights`);
});
