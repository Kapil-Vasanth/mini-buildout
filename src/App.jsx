import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "login",
        element: <Login />,
      }
    ],
  },
]);

// App component containing the router
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;