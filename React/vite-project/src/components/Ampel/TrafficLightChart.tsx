import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  import { TrafficLightHistory } from "./TrafficLight";
  import { Card } from "../Card";
  
  
  interface Props {
    history: TrafficLightHistory[];
  }
  
  export function TrafficLightChart({ history }: Props) {
    return (
      <Card className="rounded-2xl shadow">
        <CardContent className="p-6 h-64">
          <p className="mb-4 font-medium">State History</p>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={history}>
              <XAxis dataKey="time" />
              <YAxis domain={[1, 3]} ticks={[1, 2, 3]} />
              <Tooltip />
              <Line type="monotone" dataKey="state" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    );
  }
  