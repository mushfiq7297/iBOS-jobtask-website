import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div>
            <div>
              <Navbar></Navbar>  
            </div>
            <div>
            <Outlet></Outlet>
            </div>
            <div>

            </div>
            <div>

            </div>
           
        </div>
    );
};

export default Main;