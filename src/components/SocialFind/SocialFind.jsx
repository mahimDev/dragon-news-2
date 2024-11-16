import { FaFacebook, FaInstagram, FaX } from "react-icons/fa6";

const SocialFind = () => {
    return (
        <div className="flex flex-col">
            <h1 className="font-semibold text-xl mt-8">Find Us On</h1>
            <button className="flex items-center py-4 px-5 border gap-2 rounded text-lg font-semibold mt-2">
                <FaFacebook></FaFacebook>  FaceBook
            </button>
            <button className="flex items-center py-4 px-5 border gap-2 rounded text-lg font-semibold mt-2">
                <FaInstagram></FaInstagram>  instagram
            </button>
            <button className="flex items-center py-4 px-5 border gap-2 rounded text-lg font-semibold mt-2">
                <FaX></FaX>  Twitter
            </button>
        </div>
    );
};

export default SocialFind;