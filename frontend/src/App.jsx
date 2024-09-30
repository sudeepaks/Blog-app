
import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Registry } from "./pages/Register"
import { Login } from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Single from './pages/Single';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/single",
        element:<Single />
      },
      {
        path: "/write",
        element:<Write />
      }
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
export default App
