
import { Outlet } from "react-router-dom";
import Navs from "./navs";
import Apptitle from "./apptitle";

const Mainlayout=()=>{
    console.log(Outlet)
    return (
        <div>
            <Apptitle title="BOX OFFICE APP" subtitle="Are you looking for a movie or actor?"/>
           <Navs />
          <Outlet />
         
        </div>
    );
}
export default Mainlayout;