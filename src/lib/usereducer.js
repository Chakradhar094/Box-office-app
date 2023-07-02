
import { useEffect,useReducer } from "react";

  const useRedducer=(reducer,initialstate,localstoragekey)=>{
    const [state,dispatcher]=useReducer(reducer,initialstate,initial=>{
        const value=localStorage.getItem(localstoragekey);
        return value?JSON.parse(value):initial;
    });
    useEffect(()=>{
      localStorage.setItem(localstoragekey,JSON.stringify(state));
    },[state,localstoragekey]);
    return [state,dispatcher];
  }
  const reducershow=(currentstate,action)=>{
    if(action.type==="star"){
        return currentstate.concat(action.showid);
    }
    if(action.type==="unstar"){
         return currentstate.filter((id)=>id!==action.showid);
    }
    return currentstate;
  
  }
  
  export const usePersistedRedducer=()=>{
    return useRedducer(reducershow,[],'localstoragekey');
  }