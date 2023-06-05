import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#1A1A1A] text-[#FFFFF4]">
            <div>
                <Link to='/'><img className='w-14 h-14 rounded-3xl border border-red-300' src="https://previews.123rf.com/images/lumitar/lumitar1604/lumitar160400005/55700019-babyish-emblem-with-a-doll-girl-s-toys-pastel-color-palette-pink-pale-pink-blue-flat.jpg" alt="" /></Link>
                <p>Doll Toys In. Ltd<br />All Time services This Company</p>

            </div>
            <div>
                <span className="footer-title">About Us</span>
                <a href="/" className="link link-hover">Home</a>
                <a href="/Login" className="link link-hover">LogIn</a>
                <a href="/register" className="link link-hover">Register</a>
                <a href="/Blogs" className="link link-hover">Blogs</a>
            </div>
            <div>
                <span className="footer-title">Doll Toys</span>
                <a href="/AllToys" className="link link-hover">All Toys</a>
                <a href="/AddToys" className="link link-hover">Add Toys</a>
                <a href="/MyToys" className="link link-hover">My Toys</a>
                
            </div>
            <div>
                
                <label className="label">
                    <span className="label-text text-white">Enter your email</span>
                </label>
                <div className="relative">
                    <input type="text" placeholder="Email" className="input input-bordered w-full pr-16" />
                    <button className="btn bg-[#FFB6C6] absolute top-0 right-0  rounded-l-none">Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;