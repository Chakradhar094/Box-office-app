import { Link } from "react-router-dom";
import { SearchCard, SearchImgWrapper} from "../common/SearchCard";
import { StarIcon } from "../common/StarIcon";

const Actorcard=({key,name,img,id,country,birthday,gender})=>{
    if(!country)country="No desription";
   //const summaryStripped=summary?summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g,'')
   //:'No description';
    return (
        <SearchCard>
            <h1 > {name}</h1>
       
           <SearchImgWrapper> <img src={img} alt="no-img" /></SearchImgWrapper> 
        
            <div>
              <p>
              Country : {country}
            </p>  
               {
                    !!birthday&&<p>Born:{birthday}</p>
                }
            
                {
                    !!gender&&<p>Gender:{gender}</p>
                }
           
        
            
       
           
            
            </div>
          <Link to="/">read more..</Link>
       
        </SearchCard>
        
       
    );  
}

export default Actorcard;