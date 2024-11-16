import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Auth/AuthProvider";

const NavBer = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const handleLogoutBtn = () => {
        signOutUser()
            .then(() => {
                console.log("User logged out")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="flex justify-between items-center mt-8 w-11/12 mx-auto">
            <div>{user && user.displayName ? user.displayName : ""}</div>
            <ul className="flex gap-5 font-semibold text-xl">
                <Link to="/"><li>Home</li></Link>
                <Link to="/"><li>About</li></Link>
                <Link to="/"><li>Career</li></Link>
                {/* https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png */}
            </ul>
            <div className="flex items-center gap-4">
                {
                    user && user?.email ?

                        <img
                            className="w-10 h-10 rounded-full  "
                            src={user?.photoURL} alt="" />
                        :
                        <img
                            className="w-10 h-10 rounded-full   "
                            src="https://img.icons8.com/?size=100&id=ckaioC1qqwCu&format=png&color=000000" alt="" />

                }
                {user
                    ?
                    <button
                        onClick={handleLogoutBtn}
                        className="bg-black text-white py-2 px-5 text-lg font-bold"
                    >Logout</button>
                    :
                    <Link
                        to={'/auth/login'}
                        className="bg-black text-white py-2 px-5 text-lg font-bold"
                    >Login</Link>
                }

            </div>
        </div>
    );
};

export default NavBer;