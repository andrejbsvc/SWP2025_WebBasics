import { Badge } from "./TrafficLight";
import { Card, CardContent } from "./TrafficLightCard";
import { TrafficLightState } from ".TrafficLight";

interface Props {
  state: TrafficLightState;
}

export function TrafficLightCard({ state }: Props) {
  const label =
    state === 1 ? "Green" : state === 2 ? "Yellow" : "Red";

  const color =
    state === 1
      ? "bg-green-500"
      : state === 2
      ? "bg-yellow-400"
      : "bg-red-500";

  return (
    <Card className="rounded-2xl shadow">
      <CardContent className="p-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-muted-foreground">Current State</p>
          <p className="text-xl font-semibold">{label}</p>
        </div>
        <Badge className={`text-white ${color}`}>{state}</Badge>
      </CardContent>
    </Card>
  );
}
