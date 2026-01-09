export enum TrafficLightState {
  GREEN = 1,
  YELLOW = 2,
  RED = 3,
}

export interface TrafficLightHistory {
  time: string;
  state: TrafficLightState;
}

export interface TrafficLightResponse {
  title: string;
  state: TrafficLightState;
  history: TrafficLightHistory[];
}
