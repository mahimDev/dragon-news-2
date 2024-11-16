import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import imgLogin from '../../assets/imgLogin.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/Auth/AuthProvider";

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { signInUser, setUser } = useContext(AuthContext)
    // console.log(location.state)
    const handleLoginBtn = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        signInUser(email, password)
            .then(res => {
                setUser(res.user)
                navigate(location?.state ? location?.state : "/")
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-10">
                <div className="flex  gap-32 items-center flex-col lg:flex-row ">
                    <div className="text-center lg:text-left">
                        <img src={imgLogin} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form
                                onSubmit={handleLoginBtn}>

                                <div className="form-control">
                                    <label className="label">
                                        <span
                                            className="label-text"
                                        >
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span
                                            className="label-text"
                                        >
                                            Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button type="submit" className="btn btn-neutral">Login</button>
                                </div>
                                <label className="label">
                                    Have an no account? <Link to="/auth/register" className="label-text-alt link link-hover">Please Register</Link>
                                </label>
                            </form>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;