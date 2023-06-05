import Tabss from "../../../Components/Tabss";
import useTitle from "../../../Hook/useHook";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Collectioins from "../Collectioins/Collectioins";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand> 
            <Gallery></Gallery>
            <Tabss></Tabss> 
            <Collectioins></Collectioins>
            
        </div>
    );
};

export default Home;