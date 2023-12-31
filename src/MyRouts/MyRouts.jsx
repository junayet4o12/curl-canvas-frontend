import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Portfolio from "../Components/Portfolio/Portfolio";
import Barbers from "../Components/Barbers/Barbers";
import Register from "../Components/Register/Register";
import LogIn from "../Components/LogIn/LogIn";

const MyRouts = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path: '/portfolio',
          element: <Portfolio></Portfolio>
        },
        {
          path: '/barbers',
          element: <Barbers></Barbers>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
      ]
    },
  ]);

  
  
  export default MyRouts;