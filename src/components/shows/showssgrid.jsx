import Showcard from "./showcard";


const Shows=({apidata})=>{
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
                 />
              })
          }
        </div>
    );
}

export default Shows;