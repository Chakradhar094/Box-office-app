import { usePersistedRedducer } from "../lib/usereducer";
import { getshowbyIds } from "../api/tvmaje";
import { useQuery } from '@tanstack/react-query';
import Shows from "../components/shows/showssgrid"
const Starred=()=>{
    const [starredShowsIds]=usePersistedRedducer();
  
    const { data: starredShows, error: starredShowsError } = useQuery({
        queryKey: ['starred', starredShowsIds],
        queryFn: () =>
        getshowbyIds(starredShowsIds).then(result =>
            result.map(show => ({ show }))
          ),
        refetchOnWindowFocus: false,
      });
 
    
      console.log(starredShows);
     if (starredShows?.length === 0) {
    return <h1>No shows were starred</h1>;
  }

  if (starredShows?.length > 0) {
    return <Shows apidata={starredShows} />;
  }

  if (starredShowsError) {
    return <h1>Error occured: {starredShowsError.message}</h1>;
  }

  return <h1>Shows are loading</h1>;
}
export default Starred;