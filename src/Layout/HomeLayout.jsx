import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import NavBer from "../components/NavBer/NavBer";
import LeftNavBer from "../components/LeftNavBer/LeftNavBer";
import RightNavBer from "../components/RightNavber/RightNavBer";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header><Header></Header></header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
            <nav className="sticky top-0 z-30 bg-black/10 py-4 mt-8 "><NavBer></NavBer></nav>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <aside className="col-span-3">
                    <LeftNavBer></LeftNavBer>
                </aside>
                <section className="col-span-6 ">
                    <Outlet>
                    </Outlet>
                </section>
                <aside className="col-span-3">
                    <RightNavBer></RightNavBer>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayout;