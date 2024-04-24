import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/Errorpage";
import SeachPage from "../pages/SeachPage";
import Login from "../pages/Login" 
import SignUp from "../pages/SignUp";
import ShopCartA from "../pages/ShopCartA";
import ShopCartPage from "../pages/ShopCartPage";
import Reset from "../pages/Reset";
import CheckOutPage from "../pages/CheckOutPage";
import Receipt from "../pages/Receipt";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/searchpage",
          element:<SeachPage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<SignUp/>
        },
        {
          path: "/shopcartA",
          element: <ShopCartA/>
        },
        {
          path: "/shopcartpage",
          element: <ShopCartPage/>
        },
        {
          path: "/reset",
          element: <Reset/>
        },
        {
          path: "/checkout",
          element: <CheckOutPage/>
        },
        {
          path: "/receipt",
          element: <Receipt/>
        },
      ]
    },
  ]);