import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />
  },
  {
    path:"/login",
    element : <Login />
  }
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