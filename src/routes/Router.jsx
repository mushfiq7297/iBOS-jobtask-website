import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Custom from "../pages/Custom";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement:<ErrorPage></ErrorPage>,
      children:[
      {
        path: "/",
        element: <Home></Home>
      },
    //   {
    //     path: "/login",
    //     element: <Login></Login>
    //   },
    //   {
    //     path: "/register",
    //     element: <Register></Register>
    //   },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/custom",
        element: <Custom></Custom>,
      },
      {
        path: "/Blog",
        element:<Blog></Blog>
      },
      
    ]
    },
  ]);

  export default router;