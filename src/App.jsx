import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login'

// App component containing the router
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<h1>Mini Buildouts</h1>} />
          <Route path="/login" element={<h1>Testing</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;