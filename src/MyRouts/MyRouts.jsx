import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Portfolio from "../Components/Portfolio/Portfolio";

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
        }
      ]
    },
  ]);

  
  
  export default MyRouts;