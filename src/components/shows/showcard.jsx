import { Link } from "react-router-dom";


const Showcard=({key,name,img,summary,id})=>{
   const summaryStripped=summary?summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g,'')
   :'No description';
    return (
        <div>
            <h1 > {name}</h1>
       
            <img src={img} alt="no-img" />
          <div>{summaryStripped}</div>
         
          <Link to={`/show/${id}`}>read more..</Link>
         <button>star me</button>
        </div>
        
       
    );  
}

export default Showcard;