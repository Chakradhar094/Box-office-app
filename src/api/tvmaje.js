
const BASE_URL='https://api.tvmaze.com';
export const majeapi=async (queryString)=>{
 
    const response=await fetch(`${BASE_URL}${queryString}`);
   
   
  return await response.json();;
 
}

export const getshowbyIds=async (showids)=>{
         const promises=showids.map((showid)=>majeapi(`/shows/${showid}`));
         return  Promise.all(promises);
        // console.log(result);
          ;
}