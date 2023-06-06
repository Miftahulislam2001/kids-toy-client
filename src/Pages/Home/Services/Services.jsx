

const Services = () => {
    return (
        <div  className="flex flex-col items-center justify-center">

            <div className="text-center mt-6">
                <h1 className="font-bold text-4xl text-center underline mb-4">Our <span className="text-[#FFB6C6] "> Services</span></h1>
                <p>Feel free to customize it according to your preferences and the nature of your doll toy services. <br /> my expectations with its realistic. loves this doll toy and carries it everywhere.</p>
            </div>


            <div className="md:h-48 grid md:grid-cols-4 justify-center gap-14 items-center text-center">

                <div className="flex gap-3">
                    <div><img className="w-20 h-16" src="/service/car.png" alt="" /></div>
                    <div>
                        <h2 className="uppercase text-xl text-left">Shipping Services</h2>
                        <h5 className="text-left">Fast Shipping</h5>
                    </div>
                </div>


                <div className="flex gap-3">
                    <div><img className="w-20 h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTda8R5wsDexOmNtviqhLPDJLgk0k_cmTh7cg&usqp=CAU" alt="" /></div>
                    <div>
                        <h2 className="uppercase text-xl text-left">Online Payment</h2>
                        <h5 className="text-left">Payment Methods</h5>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div><img className="w-20 h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDqLxlumPSIxvcbtRnMnT0roXK5bxtQAX8A&usqp=CAU" alt="" /></div>
                    <div>
                        <h2 className="uppercase text-xl text-left">24 Hours Support</h2>
                        <h5 className="text-left">Unlimited Help </h5>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div><img className="w-20 h-16" src="https://img.freepik.com/premium-vector/express-delivery-label-courier-boy-riding-motor-bike-vector-logo_212474-687.jpg" alt="" /></div>
                    <div>
                        <h2 className="uppercase text-xl text-left">On time delivery</h2>
                        <h5 className="text-left">All Time Delivery</h5>
                        
                    </div>
                </div>

            </div>

        </div>





    );
};

export default Services;