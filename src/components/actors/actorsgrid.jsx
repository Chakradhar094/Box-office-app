import Actorcard from "./actorscard";
import { FlexGrid } from "../common/FlexGrid";

const Actors=({apidata})=>{
    return (
        <FlexGrid>
          {
            apidata.map((data, index) => {
              return <Actorcard 
              key={index}   
              name={data.person.name}
               img={data.person.image?data.person.image.medium:'./no-image.png'}
              
               id={data.person.id}
               country={data.person.contry}
               birthday={data.person.birthday}
               gender={data.person.gender}
               />
            })
          }
        </FlexGrid>
    );
}

export default Actors;