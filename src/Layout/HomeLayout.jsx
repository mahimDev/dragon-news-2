import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import NavBer from "../components/NavBer/NavBer";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header><Header></Header></header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
            <nav><NavBer></NavBer></nav>
            <main></main>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;