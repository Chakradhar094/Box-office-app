import { useState } from 'react';
import { majeapi } from './../api/tvmaje';
import Search from '../components/searchfrom';
import Shows from '../components/shows/showssgrid';
import Actors from '../components/actors/actorsgrid';
const Home = () => {
  const [apidata, setapidata] = useState(null);
  const [apierror, setapierror] = useState(null);
 

  const onsearch = async ({q,searchoption}) => {
   
    try {
      setapierror(null);
      if(searchoption==='shows'){
      const result = await majeapi(`/search/shows?q=${q}`);
      if(result.length===0){
           throw new Error("no results");
      }
      setapidata(result);
      }else{
        const result = await majeapi(`/search/people?q=${q}`);
        if(result.length===0){
          throw new Error("no results");
     }
        setapidata(result);
      }
      
    } catch (err) {
      setapierror(err);
    }
  };
 
  const renderapidata = () => { 
    if (apierror) {

      return <div>No results found</div>
    }
    if (apidata) {
       return apidata[0].show?<Shows apidata={apidata}/>:<Actors apidata={apidata}/>;
      };
    }
  


 
  return (
    <div>
      <Search onsearch={onsearch} />
      <div>{renderapidata()}</div>
      <div>Home page</div>
    </div>
  );
};

export default Home;
