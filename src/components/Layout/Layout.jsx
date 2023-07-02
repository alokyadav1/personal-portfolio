/* eslint-disable no-unused-vars */
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import "./layout.css"
function Layout() {
    return (
        <div className="layout-container">
            <div className="main-page flex flex-col">
                <div className="h-9 z-30">
                    <Header />
                </div>
                <div className="outlet p-2 md:p-5 md:mt-10">
                    <Outlet />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Layout;