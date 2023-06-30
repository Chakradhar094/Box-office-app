import { useState } from 'react';
import { majeapi } from './../api/tvmaje';
const Home = () => {
  const [serachStr, setsearchStr] = useState('');
  const [apidata, setapidata] = useState(null);
  const [apierror, setapierror] = useState(null);
  const [searchoption,setsearchoption]=useState('shows');
  const onsearchStrChange = eve => {
    setsearchStr(eve.target.value);
  };
 
  const onserach = async eve => {
    eve.preventDefault();
    try {
      setapierror(null);
      if(searchoption==='shows'){
      const result = await majeapi(`/search/shows?q=${serachStr}`);
      setapidata(result);
      }else{
        const result = await majeapi(`/search/people?q=${serachStr}`);
        setapidata(result);
      }
      
    } catch (err) {
      setapierror(err);
    }
  };
  const renderapidata = () => {
    if (apierror) {
      return <div>{apierror}</div>;
    }
    if (apidata) {
       return apidata[0].show?apidata.map((data, index) => {
        return <div key={index}> {data.show.name}</div>;
      }):apidata.map((data, index) => {
        return <div key={index}> {data.person.name}</div>;
      });
    }
  };


  const onradioclick=(eve)=>{
     setsearchoption(eve.target.value);
  }
  return (
    <div>
      <form onSubmit={onserach}>
        <input value={serachStr} onChange={onsearchStrChange} />

        <label>
         
          <input type="radio" name="search-option" value="shows" checked={searchoption==="shows"}onChange={onradioclick}/>
          Shows
        </label>
        <label>
          
          <input type="radio" name="search-option" value="actors" checked={searchoption==="actors"}onChange={onradioclick}/>
          Actors
        </label>
     
       
        <button type="submit">search</button>
      </form>
      <div>{renderapidata()}</div>
      <div>Home page</div>
    </div>
  );
};

export default Home;
