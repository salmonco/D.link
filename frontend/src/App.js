import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/start/Start";
import Loading from "./pages/loading/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
