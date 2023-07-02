
import { useEffect,useState } from "react";

  const useRedducer=(initialstate,sessionalstoragekey)=>{
    const [state,setsearchStr]=useState(()=>{
        const value=sessionStorage.getItem(sessionalstoragekey);
        return value?JSON.parse(value):initialstate;
    });
    useEffect(()=>{
        sessionStorage.setItem(sessionalstoragekey,JSON.stringify(state));
    },[state,sessionalstoragekey]);
    return [state,setsearchStr];
  }
  
  
  export const usePersistedstate=()=>{
    return useRedducer(' ','sessionalstoragekey');
  }