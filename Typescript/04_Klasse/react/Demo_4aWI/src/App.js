import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cars from "./components/Cars";
function App() {
    const [count, setCount] = useState(0);
    return (_jsx(_Fragment, { children: _jsx(Cars, {}) }));
}
export default App;
//# sourceMappingURL=App.js.map