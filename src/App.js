import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Golden from "./Components/Golden_Grove/Golden";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/golden" element={<Golden />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;