

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#FFB6C6]">
        <div className="hero-content flex-col lg:flex-row text-center">
            <div className='lg:w-1/2 relative'>
                <img src="https://cdn.shopify.com/s/files/1/0636/3044/2723/files/s2.png?v=1648189071" className="w-3/4 rounded-lg shadow-2xl" />
            
            </div>
            <div className='lg:w-1/2 space-y-5 p-4'>
                <h3 className='text-3xl text-orange-500 font-bold'>New Arrivals</h3>
                <h1 className="text-5xl font-bold">Best Dolls Toys Store & Online Shope</h1>
                <p className="py-6">The Best Online Dolls Toys Shop , but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="btn btn-[#FAA3B3] font-bold rounded-xl">Explore Now</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;