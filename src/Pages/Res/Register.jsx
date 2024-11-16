import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import imgLogin from '../../assets/imgLogin.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/Auth/AuthProvider";
const Register = () => {
    const { setUser, createUser, updatedUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegisterBtn = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const image = form.get("image")
        const password = form.get("password")
        console.log({ name, email, password, image })
        createUser(email, password)
            .then(res => {
                setUser(res.user)
                updatedUser({
                    displayName: name, photoURL: image
                })
                    .then(() => {
                        navigate("/")
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <img src={imgLogin} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form
                            onSubmit={handleRegisterBtn}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className="label-text"
                                    >
                                        Full Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full name"
                                    className="input input-bordered"
                                />
                            </div>
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
                                        Image Url
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="image url"
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
                                <button type="submit" className="btn btn-neutral">Register</button>
                            </div>
                            <label className="label">
                                Already Have an account? <Link to="/auth/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;