import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MyToyas from "../Pages/MyToys/MyToyas";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/LogIn/LogIn";
import Register from "../Pages/LogIn/Register";
import ViewDetails from "../Components/ViewDetails";
import EditToy from "../Components/EditToy";
import PrivateRouter from "../Privet/PrivetRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/MyToys',
                element: <PrivateRouter>
                    <MyToyas></MyToyas>
                </PrivateRouter>
            },
            {
                path: '/AllToys',
                element: <AllToys></AllToys>
            },
            {
                path: '/AddToys',
                element: <PrivateRouter>
                    <AddToys></AddToys>
                </PrivateRouter>
            },
            {
                path: '/Blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/view-details/:id',
                element: <PrivateRouter>
                    <ViewDetails></ViewDetails>
                </PrivateRouter>
            },
            {
                path: '/edit/:id',
                element: <EditToy></EditToy>
            },

        ]
    },
]);

export default router;