# 4 Ampeln Dashboard mit API

Eine React-Anwendung mit 4 Ampeln (TrafficLights) und Statistiken. Die Anwendung verwendet einen Express-Backend API.

## Setup

1. **Dependencies installieren**:
```bash
npm install
```

2. **Backend Server starten** (in einem Terminal):
```bash
npm run server
```

Der Server läuft dann unter `http://localhost:5000`

3. **Frontend Development Server starten** (in einem anderen Terminal):
```bash
npm run dev
```

Der Frontend läuft dann unter `http://localhost:5173` (oder einer anderen Port, je nach Vite-Konfiguration)

## API Endpoints

Der Backend bietet folgende REST API Endpoints:

- `GET /api/health` - Prüft, ob die API online ist
- `GET /api/traffic-lights` - Alle 4 Ampeln abrufen
- `GET /api/traffic-lights/:id` - Eine einzelne Ampel abrufen (id: 1-4)
- `PUT /api/traffic-lights/:id/cycle` - Ampel weiterschalten (Red → Green → Yellow → Red)
- `PUT /api/traffic-lights/:id/reset` - Statistiken einer Ampel zurücksetzen
- `PUT /api/traffic-lights/reset/all` - Statistiken aller Ampeln zurücksetzen

## Features

✅ **4 separate Ampeln** mit eigenem Namen
✅ **3 Farben** - Rot, Gelb, Grün mit animierten Übergängen
✅ **Individuelle Steuerung** - Jede Ampel kann einzeln geschaltet werden
✅ **Detaillierte Statistiken** für jede Ampel
✅ **Gesamtstatistik** - Übersicht über alle 4 Ampeln
✅ **Reset-Funktionen** - Statistiken einzeln oder alle zusammen zurücksetzen
✅ **API-Status Anzeige** - Zeigt an, ob die API verbunden ist
✅ **Error Handling** - Zeigt Fehlermeldungen bei API-Problemen
✅ **Responsive Design** - Passt sich an verschiedene Bildschirmgrößen an

## Ampel-Zyklus

Jede Ampel durchläuft folgende Zyklus:
- **Rot** → Grün (grün +1)
- **Grün** → Gelb (gelb +1)
- **Gelb** → Rot (rot +1)

## Wichtig

Die Backend API muss laufen, damit die Frontend-Anwendung funktioniert. Wenn Sie die Fehlermeldung "API getrennt" sehen, starten Sie den Backend Server mit `npm run server`.
