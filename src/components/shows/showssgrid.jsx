import Showcard from "./showcard";
import { usePersistedRedducer } from "../../lib/usereducer";




const Shows=({apidata})=>{
   
  const [starredshows,dispatchshows]=usePersistedRedducer();
   
  const onStarclick=(showid)=>{
       const starred=starredshows.includes(showid);

       if(!starred){
             dispatchshows({type:"star",showid});
       }else{
        dispatchshows({type:"unstar",showid});
       }
  }
  console.log(apidata);
 
    return (
        <div>
          {
            apidata.map((data, index) => {
                return <Showcard 
                key={index} 
                name={data.show.name}
                 img={data.show.image?data.show.image.medium:'./no-image.png'}
                 summary={data.show.summary}
                 id={data.show.id}
                 onStarclick={onStarclick}
                 starred={starredshows.includes(data.show.id)}
                 />
              })
          }
        </div>
    );
}

export default Shows;