import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Aos from "aos";
import { useEffect } from "react";


const Main = () => {
    useEffect(() => {
        Aos.init(
            {
                duration:400,
            }
        )
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;