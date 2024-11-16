import { Link } from "react-router-dom";

const NavBer = () => {
    return (
        <div className="flex justify-between items-center mt-8 w-11/12 mx-auto">
            <div></div>
            <ul className="flex gap-5 font-semibold text-xl">
                <Link to="/"><li>Home</li></Link>
                <Link to="/"><li>About</li></Link>
                <Link to="/"><li>Career</li></Link>

            </ul>
            <div className="flex items-center gap-4">
                <img
                    className="w-12 "
                    src="https://img.icons8.com/?size=100&id=ckaioC1qqwCu&format=png&color=000000" alt="" />
                <button className="bg-black text-white py-2 px-5 text-lg font-bold">Login</button>
            </div>
        </div>
    );
};

export default NavBer;