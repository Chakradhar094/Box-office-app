


import { useState } from "react";
import {majeapi} from "./../api/tvmaje"
const Home=()=>{

    const [serachStr,setsearchStr]=useState('');
    const [apidata,setapidata]=useState(null);
    const [apierror,setapierror]=useState(null);
    const onsearchStrChange=(eve)=>{
        setsearchStr(eve.target.value);
    }
    const searchshows=async ()=>{
        
         const body= await majeapi(`/search/shows?q=${serachStr}`);
         return body;
    }
    const onserach = async  (eve )=>{
        eve.preventDefault();
      try{  
        setapierror(null);
        const result=await searchshows();
        setapidata(result);
      }
      catch(err){
           setapierror(err);
      }
        
    }
    const renderapidata=()=>{
        if(apierror){

            return <div>{apierror}</div>
        }
        if(apidata){
            return(  
                apidata.map((data,index)=>{
                    return <div key={index}> {data.show.name}</div>
                })
            );
              
        }
    }
    return (
       
    <div>
       
         <form onSubmit={onserach}>
         <input value={serachStr} onChange={onsearchStrChange}/>
          <button type="submit" >search</button>
         </form>
         <div>
         {renderapidata()}
          </div>
         <div>Home page</div>
          


    </div>
  
    );
}

export default Home;