import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="ml-60 p-4 w-full">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
