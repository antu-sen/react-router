import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>

            <main>
                <Outlet></Outlet>
            </main>

            <Footer/>


        </div>
    );
};

export default Root;