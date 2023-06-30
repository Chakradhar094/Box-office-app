import { Link } from "react-router-dom";


const Actorcard=({key,name,img,id,country,birthday,gender})=>{
    if(!country)country="No desription";
   //const summaryStripped=summary?summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g,'')
   //:'No description';
    return (
        <div>
            <h1 > {name}</h1>
       
            <img src={img} alt="no-img" />
        
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
         <button>star me</button>
        </div>
        
       
    );  
}

export default Actorcard;