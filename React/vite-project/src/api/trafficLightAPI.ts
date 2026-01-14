const API_BASE_URL = "http://localhost:3000/api";

export interface TrafficLightData {
  id: number;
  name: string;
  currentState: "red" | "yellow" | "green";
  statistics: {
    red: number;
    yellow: number;
    green: number;
  };
}

export class TrafficLightAPI {
  static async getAllTrafficLights(): Promise<TrafficLightData[]> {
    const response = await fetch(`${API_BASE_URL}/traffic-lights`);
    if (!response.ok) {
      throw new Error("Failed to fetch traffic lights");
    }
    return response.json();
  }

  static async getTrafficLight(id: number): Promise<TrafficLightData> {
    const response = await fetch(`${API_BASE_URL}/traffic-lights/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch traffic light ${id}`);
    }
    return response.json();
  }

  static async cycleTrafficLight(id: number): Promise<TrafficLightData> {
    const response = await fetch(`${API_BASE_URL}/traffic-lights/${id}/cycle`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to cycle traffic light ${id}`);
    }
    return response.json();
  }

  static async resetTrafficLight(id: number): Promise<TrafficLightData> {
    const response = await fetch(`${API_BASE_URL}/traffic-lights/${id}/reset`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to reset traffic light ${id}`);
    }
    return response.json();
  }

  static async resetAllTrafficLights(): Promise<TrafficLightData[]> {
    const response = await fetch(`${API_BASE_URL}/traffic-lights/reset/all`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to reset all traffic lights");
    }
    return response.json();
  }

  static async getHealth(): Promise<{ status: string; timestamp: string }> {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) {
      throw new Error("API is not available");
    }
    return response.json();
  }
}
