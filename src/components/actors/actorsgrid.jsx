import Actorcard from "./actorscard";


const Actors=({apidata})=>{
    return (
        <div>
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
        </div>
    );
}

export default Actors;