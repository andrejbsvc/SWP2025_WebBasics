import Button from "./components/Button";
import Card from "./components/Card";
import CounterComponent from "./components/CounterComponent";

export default function App() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold">Hallo Klick mal!</h1>
        <Button title="Klick" description="Klick weiter" />
      </div>

      <div className="flex justify-center items-center grid-cols-2">
        <Card title="Personalausweis" description="Das ist ein Ausweis" />
        <h1 className="font-bold">John Doe</h1>
        <h2>Architect & Engineer</h2>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <CounterComponent />
      </div>
    </div>
  );
}
