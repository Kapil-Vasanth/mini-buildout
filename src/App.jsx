import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import "./App.css";



function App() {
  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
