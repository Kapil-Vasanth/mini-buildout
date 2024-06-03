import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import "./App.css";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Working</>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
