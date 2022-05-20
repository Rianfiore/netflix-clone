import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
