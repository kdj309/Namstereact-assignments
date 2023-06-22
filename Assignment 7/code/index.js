import ReactDOM from "react-dom/client";
import App from "./src/app";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/UI/Layout";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import NotFound from "./src/components/UI/NotFound";
import Restrodetail from "./src/components/Restaurants/Restrodetail";
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './node_modules/bootstrap/dist/js/bootstrap.js'
import Login from "./src/components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:'/restrorants/:restroid',
        element:<Restrodetail/>
      }
    ],
    errorElement:<NotFound/>,
    
  },
  {
    path:'/login',
    element:<Login/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
