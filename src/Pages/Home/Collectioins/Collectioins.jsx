import { Rating } from "@smastrom/react-rating";



const Collectioins = () => {
    return (
        <div>
            <div className="text-center mt-6">
                <h1 className="font-bold text-4xl text-center underline mb-4">Top <span className="text-[#FFB6C6] ">Rated</span></h1>
                <p>This is Top rated Product . this product quantity is very Nice. <br /> my expectations with its realistic. loves this doll toy and carries it everywhere.</p>
            </div>



            <div className="grid md:grid-cols-3 gap-3 items-center justify-center my-12 max-w-[1240px] mx-auto text-center">

                <div data-aos="zoom-in" className="product-card bg-white rounded-lg shadow-lg p-4 w-72">
                    <img src="https://m.media-amazon.com/images/I/61+55yvCrDL._AC_UL600_FMwebp_QL65_.jpg" alt="" className="product-image rounded-md mb-4 h-72" />
                    <h3 className="product-title text-xl font-semibold mb-2 text-center">Top Rated</h3>
                    <p className="product-rating text-gray-600 text-center"> American doll toy</p>
                    <p className="product-rating text-gray-600 text-center">Rating: 5.0</p>
                    <Rating className="mx-auto mb-4" style={{ maxWidth: 100 }} value="5" readOnly></Rating>

                    <button className="product-button bg-red-300 hover:bg-red-200 font-semibold text-white py-2 px-4 rounded-full shadow-md text-center w-full">
                        Add to Cart
                    </button>
                </div>

                <div data-aos="zoom-in" className="product-card bg-white rounded-lg shadow-lg p-4 w-72">
                    <img src="https://m.media-amazon.com/images/I/71HQG4-NNHL._AC_UL600_FMwebp_QL65_.jpg" alt="" className="product-image rounded-md mb-4 h-72" />
                    <h3 className="product-title text-xl font-semibold mb-2 text-center">Top Rated</h3>
                    <p className="product-rating text-gray-600 text-center"> American doll toy</p>
                    <p className="product-rating text-gray-600 text-center mb-4">Rating: 4.7</p>
                    
                    <Rating className="mx-auto mb-4" style={{ maxWidth: 100 }} value="4.5" readOnly></Rating>
                    <button className="product-button bg-red-300 hover:bg-red-200 font-semibold text-white py-2 px-4 rounded-full shadow-md text-center w-full">
                        Add to Cart
                    </button>
                </div>

                <div data-aos="zoom-in" className="product-card bg-white rounded-lg shadow-lg p-4 w-72">
                    <img src="https://m.media-amazon.com/images/I/71P0FTwDMHL._AC_UL600_FMwebp_QL65_.jpg" alt="" className="product-image rounded-md mb-4 h-72" />
                    <h3 className="product-title text-xl font-semibold mb-2 text-center">Top Rated</h3>
                    <p className="product-rating text-gray-600 text-center"> Barbie Doll toy</p>
                    <p className="product-rating text-gray-600 text-center mb-4">Rating: 4.5</p>
                    <Rating className="mx-auto mb-4" style={{ maxWidth: 100 }} value="4.5" readOnly></Rating>
                    <button className="product-button bg-red-300 hover:bg-red-200 font-semibold text-white py-2 px-4 rounded-full shadow-md text-center w-full">
                        Add to Cart
                    </button>
                </div>

                <div data-aos="zoom-in" className="product-card bg-white rounded-lg shadow-lg p-4 w-72">
                    <img src="https://m.media-amazon.com/images/I/81CA33q06fL._AC_UL600_QL65_.jpg" alt="" className="product-image rounded-md mb-4 h-72" />
                    <h3 className="product-title text-xl font-semibold mb-2 text-center">Top Rated</h3>
                    <p className="product-rating text-gray-600 text-center"> Baby doll toy</p>
                    <p className="product-rating text-gray-600 text-center mb-4">Rating: 4.0</p>
                    <Rating className="mx-auto mb-4" style={{ maxWidth: 100 }} value="4" readOnly></Rating>
                    <button className="product-button bg-red-300 hover:bg-red-200 font-semibold text-white py-2 px-4 rounded-full shadow-md text-center w-full">
                        Add to Cart
                    </button>
                </div>

                <div data-aos="zoom-in" className="product-card bg-white rounded-lg shadow-lg p-4 w-72">
                    <img src="https://m.media-amazon.com/images/I/81-yDWJ2OKL._AC_UL600_QL65_.jpg" alt="" className="product-image rounded-md mb-4 h-72" />
                    <h3 className="product-title text-xl font-semibold mb-2 text-center">Top Rated</h3>
                    <p className="product-rating text-gray-600 text-center"> Barbie doll toy</p>
                    <p className="product-rating text-gray-600 text-center mb-4">Rating: 4.9</p>
                    <Rating className="mx-auto mb-4" style={{ maxWidth: 100 }} value="4.5" readOnly></Rating>
                    <button className="product-button bg-red-300 hover:bg-red-200 font-semibold text-white py-2 px-4 rounded-full shadow-md text-center w-full">
                        Add to Cart
                    </button>
                </div>

                <div data-aos="zoom-in" className="product-card bg-white rounded-lg shadow-lg p-4 w-72">
                    <img src="https://m.media-amazon.com/images/I/718fLU+H5LL._AC_UL600_FMwebp_QL65_.jpg" alt="" className="product-image rounded-md mb-4 h-72" />
                    <h3 className="product-title text-xl font-semibold mb-2 text-center">Top Rated</h3>
                    <p className="product-rating text-gray-600 text-center"> Baby doll toy</p>
                    <p className="product-rating text-gray-600 text-center mb-4">Rating: 4.4</p>
                    <Rating className="mx-auto mb-4" style={{ maxWidth: 100 }} value="4" readOnly></Rating>
                    <button className="product-button bg-red-300 hover:bg-red-200 font-semibold text-white py-2 px-4 rounded-full shadow-md text-center w-full">
                        Add to Cart
                    </button>
                </div>


            </div>











        </div>
    );
};

export default Collectioins;