import { Outlet } from "react-router-dom";
import NavBer from "../components/NavBer/NavBer";

const AuthLayout = () => {
    return (
        <div className="w-11/12 mx-auto py-4">
            <header>
                <NavBer></NavBer>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;