import { Link } from "react-router-dom";

const LINK=[
    {
      text:"Home",
      to:"/"
    },
    {
      text:"starred",
      to:"/starred"
    }
]
const Navs=()=>{
    return (
    <div>
       <ul>
        {
            LINK.map((item,index)=>{
                return  <li key={index}>
                    <Link to={item.to}>{item.text}</Link>
                </li>
            }) 
        }
       </ul>
    </div>
    );
}

export default Navs;