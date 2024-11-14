import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div>
            <div className="flex items-center gap-4 bg-slate-200 mt-10">
                <p className="bg-red-600 py-2 px-5 text-2xl font-bold text-white">Latest </p>
                <p className=" px-3">
                    <Marquee
                        direction="left"
                        className="space-x-10 text-2xl font-cookie"
                        pauseOnHover={true}
                    >
                        <Link >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque corporis delectus tempore, inventore saepe
                        </Link>
                        <Link >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque corporis delectus tempore, inventore saepe
                        </Link>
                        <Link >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque corporis delectus tempore, inventore saepe
                        </Link>
                    </Marquee>

                </p>
            </div>
        </div>
    );
};

export default LatestNews;