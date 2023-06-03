import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MyToyas from "../Pages/MyToys/MyToyas";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/LogIn/LogIn";
import Register from "../Pages/LogIn/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/MyToys',
            element: <MyToyas></MyToyas>
        },
        {
            path:'/AllToys',
            element: <AllToys></AllToys>
        },
        {
            path:'/AddToys',
            element: <AddToys></AddToys>
        },
        {
            path:'/Blogs',
            element: <Blogs></Blogs>
        },
        {
            path:'/Login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
      
      ]
    },
  ]);

  export default router;