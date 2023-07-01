import { Link, useParams } from 'react-router-dom';
import { majeapi } from '../api/tvmaje';
import React, { useState, useEffect } from 'react';
import Showmaindata from '../components/shows/showmaindata';
import Showdetails from '../components/shows/showdetails';


const useCustomHook=(showId)=>{
  const [data, setdata] = useState(null);
  const [error,seterror]=useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await majeapi(`/shows/${showId}`);
        
        setdata(response);
      } catch (err) {
        seterror(err);
      }
    }
    fetchData();
  }, [showId]);

  return {data,error}
}
const Show = () => {
  
  const { showId } = useParams();
   
  const {data,error}=useCustomHook(showId);
   console.log(data);
   const fun=()=>{
    if(data){
      return<div>
         <Showmaindata 
      name={data.name}
      genres={data.genres}
      rating={data.rating}
      image={data.image}
      summary={data.summary}
    />
    <Showdetails 

    />
    </div>
    }
    if(error){
      return <div>No results</div>
    }
    return <div>Data is loading</div>
   }
    
  return (
   
    <div>
      <Link to="/" ><button>Go back</button></Link>
      {fun()}
     
      <Link to="/" ><button>Go back</button></Link>
    </div>
  );
};
export default Show;


// {
//   "id": 17193,
//   "url": "https://www.tvmaze.com/shows/17193/amagami-ss",
//   "name": "Amagami SS",
//   "type": "Animation",
//   "language": "Japanese",
//   "genres": [
//       "Drama",
//       "Anime",
//       "Romance"
//   ],
//   "status": "Ended",
//   "runtime": 25,
//   "averageRuntime": 25,
//   "premiered": "2010-07-02",
//   "ended": "2012-03-30",
//   "officialSite": "http://www.tbs.co.jp/anime/amagami/",
//   "schedule": {
//       "time": "01:25",
//       "days": [
//           "Friday"
//       ]
//   },
//   "rating": {
//       "average": null
//   },
//   "weight": 71,
//   "network": {
//       "id": 159,
//       "name": "TBS",
//       "country": {
//           "name": "Japan",
//           "code": "JP",
//           "timezone": "Asia/Tokyo"
//       },
//       "officialSite": "https://www.tbs.co.jp/"
//   },
//   "webChannel": null,
//   "dvdCountry": null,
//   "externals": {
//       "tvrage": null,
//       "thetvdb": 172921,
//       "imdb": "tt1685397"
//   },
//   "image": {
//       "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/57/144821.jpg",
//       "original": "https://static.tvmaze.com/uploads/images/original_untouched/57/144821.jpg"
//   },
//   "summary": "<p>A second-year high school boy finds himself uneasy during Christmas time due to an experience in the past. However, this year at Christmas, he gets his last chance to ask out a graduating female senior named Haruka Morishima — or one of several other classmates. The story of the anime will be arranged in an omnibus format, with each heroine getting her own version of the story animated. Each heroine will sing her own version of the ending theme song.</p>",
//   "updated": 1657650232,
//   "_links": {
//       "self": {
//           "href": "https://api.tvmaze.com/shows/17193"
//       },
//       "previousepisode": {
//           "href": "https://api.tvmaze.com/episodes/785817"
//       }
//   }
// }