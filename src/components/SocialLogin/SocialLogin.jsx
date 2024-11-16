import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className="flex flex-col  ">
            <h1 className="text-xl mx-auto mt-8 font-semibold ">Login With</h1>
            <button className="flex mx-auto items-center py-2 px-5 border gap-2 rounded text-lg font-semibold mt-5">
                <FcGoogle /> Login with Google
            </button>
            <button className="flex mx-auto items-center py-2 px-5 border gap-2 rounded text-lg font-semibold mt-5">
                <FaGithub /> Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;