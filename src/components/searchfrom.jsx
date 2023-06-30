import { useState } from "react";

const Search=({onsearch})=>{
    const [serachStr, setsearchStr] = useState('');
   
    const [searchoption,setsearchoption]=useState('shows');

    
    const onsearchStrChange = eve => {
        setsearchStr(eve.target.value);
      }

      const onradioclick=(eve)=>{
        setsearchoption(eve.target.value);
     }
     const onsubmit=(eve)=>{
        eve.preventDefault();
        const obj={
            q:serachStr,
            searchoption
        }
        onsearch(obj);
     }
    return (
    <>
     <form onSubmit={onsubmit}>
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
      </form></>
    );
}
export default Search;