
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
import "./style.scss"

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
        path: "/post:id",
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
    <div className="app">
      <div className="container">
          <RouterProvider router={router} />
      </div>
    </div>
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
