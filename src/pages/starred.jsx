import { usePersistedRedducer } from "../lib/usereducer";
import { getshowbyIds } from "../api/tvmaje";
import { useQuery } from '@tanstack/react-query';
import Shows from "../components/shows/showssgrid"
import { TextCenter } from "../components/common/TextCenter";
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
    return <TextCenter>No shows were starred</TextCenter>;
  }

  if (starredShows?.length > 0) {
    return <Shows apidata={starredShows} />;
  }

  if (starredShowsError) {
    return <TextCenter>Error occured: {starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Shows are loading...</TextCenter>;
}
export default Starred;