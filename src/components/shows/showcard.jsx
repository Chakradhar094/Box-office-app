import { Link } from "react-router-dom";


const Showcard=({key,name,img,summary,id,onStarclick,starred})=>{
   const summaryStripped=summary?summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g,'')
   :'No description';
    return (
        <div>
            <h1 > {name}</h1>
       
            <img src={img} alt="no-img" />
          <div>{summaryStripped}</div>
         
          <a href={`/show/${id}`} target="_blank" rel="noreferrer">read more..</a>
         <button onClick={()=>onStarclick(id)}>{starred?'unstar me':'star me'}</button>
        </div>
        
       
    );  
}

export default Showcard;