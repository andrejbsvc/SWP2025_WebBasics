import { useState, useEffect } from "react";
import { TrafficLightAPI } from "../../api/trafficLightAPI";
import type { TrafficLightData } from "../../api/trafficLightAPI";

export default function MultiTrafficLightApp() {
  const [trafficLights, setTrafficLights] = useState<TrafficLightData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiConnected, setApiConnected] = useState(false);

  // Load traffic lights from API on component mount
  useEffect(() => {
    const loadTrafficLights = async () => {
      try {
        // Check API connection first
        await TrafficLightAPI.getHealth();
        setApiConnected(true);

        const data = await TrafficLightAPI.getAllTrafficLights();
        setTrafficLights(data);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to connect to API. Make sure the server is running on port 5000."
        );
        setApiConnected(false);
      } finally {
        setLoading(false);
      }
    };

    loadTrafficLights();
  }, []);

  const cycleTrafficLight = async (id: number) => {
    try {
      const updatedLight = await TrafficLightAPI.cycleTrafficLight(id);
      setTrafficLights((prevLights) =>
        prevLights.map((light) =>
          light.id === id ? updatedLight : light
        )
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to cycle traffic light"
      );
    }
  };

  const resetStatistics = async (id: number) => {
    try {
      const updatedLight = await TrafficLightAPI.resetTrafficLight(id);
      setTrafficLights((prevLights) =>
        prevLights.map((light) =>
          light.id === id ? updatedLight : light
        )
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to reset traffic light"
      );
    }
  };

  const resetAllStatistics = async () => {
    try {
      const updatedLights = await TrafficLightAPI.resetAllTrafficLights();
      setTrafficLights(updatedLights);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to reset all traffic lights"
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-700">Laden...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          4 Ampeln Dashboard
        </h1>

        {/* API Status */}
        <div className="mb-6 text-center">
          <div
            className={`inline-flex items-center px-4 py-2 rounded-lg ${
              apiConnected
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full mr-2 ${
                apiConnected ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            {apiConnected ? "API verbunden" : "API getrennt"}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p className="font-semibold">Fehler:</p>
            <p>{error}</p>
          </div>
        )}

        {/* Reset All Button */}
        <div className="mb-6 text-center">
          <button
            onClick={resetAllStatistics}
            disabled={!apiConnected}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Alle Statistiken zurücksetzen
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trafficLights.map((light) => (
            <div
              key={light.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                {light.name}
              </h2>

              {/* Traffic Light */}
              <div className="bg-gray-800 rounded-3xl p-4 mb-6 w-32">
                <div className="space-y-3">
                  <div
                    className={`w-20 h-20 rounded-full mx-auto transition-all ${
                      light.currentState === "red"
                        ? "bg-red-600 shadow-lg shadow-red-500/50"
                        : "bg-red-900/30"
                    }`}
                  />
                  <div
                    className={`w-20 h-20 rounded-full mx-auto transition-all ${
                      light.currentState === "yellow"
                        ? "bg-yellow-400 shadow-lg shadow-yellow-400/50"
                        : "bg-yellow-900/30"
                    }`}
                  />
                  <div
                    className={`w-20 h-20 rounded-full mx-auto transition-all ${
                      light.currentState === "green"
                        ? "bg-green-500 shadow-lg shadow-green-500/50"
                        : "bg-green-900/30"
                    }`}
                  />
                </div>
              </div>

              {/* Control Button */}
              <button
                onClick={() => cycleTrafficLight(light.id)}
                disabled={!apiConnected}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiterschalten
              </button>

              {/* Statistics */}
              <div className="w-full bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-700 mb-3 text-center">
                  Statistik
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                      Rot:
                    </span>
                    <span className="font-bold">{light.statistics.red}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
                      Gelb:
                    </span>
                    <span className="font-bold">{light.statistics.yellow}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                      Grün:
                    </span>
                    <span className="font-bold">{light.statistics.green}</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-gray-300">
                    <div className="flex justify-between items-center font-semibold">
                      <span>Gesamt:</span>
                      <span>
                        {light.statistics.red +
                          light.statistics.yellow +
                          light.statistics.green}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => resetStatistics(light.id)}
                  disabled={!apiConnected}
                  className="w-full mt-3 px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Zurücksetzen
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Statistics */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
            Gesamtstatistik
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {trafficLights.map((light) => (
              <div key={light.id} className="text-center">
                <h3 className="font-semibold text-gray-600 mb-2">
                  {light.name}
                </h3>
                <div className="text-3xl font-bold text-gray-800">
                  {light.statistics.red +
                    light.statistics.yellow +
                    light.statistics.green}
                </div>
                <div className="text-sm text-gray-500">
                  Schaltungen gesamt
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center border-t pt-4">
            <div className="text-4xl font-bold text-blue-600">
              {trafficLights.reduce(
                (total, light) =>
                  total +
                  light.statistics.red +
                  light.statistics.yellow +
                  light.statistics.green,
                0
              )}
            </div>
            <div className="text-gray-600 mt-1">
              Alle Schaltungen kombiniert
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
