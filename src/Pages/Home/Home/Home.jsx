import Tabss from "../../../Components/Tabss";
import useTitle from "../../../Hook/useHook";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner> 
            <Gallery></Gallery>
            <Tabss></Tabss>
            <Brand></Brand>
        </div>
    );
};

export default Home;