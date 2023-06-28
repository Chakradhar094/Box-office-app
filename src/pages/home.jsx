
import { Link } from "react-router-dom";



const Home=()=>{
    return (
        <h1>
    <div >
         <Link to="/starred" >Go to starred page</Link>
         <div>Home page</div>
    </div>
    </h1>
    );
}

export default Home;