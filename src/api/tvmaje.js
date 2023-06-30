
const BASE_URL='https://api.tvmaze.com';
export const majeapi=async (queryString)=>{
 
    const response=await fetch(`${BASE_URL}${queryString}`);
    const body=await response.json();
    if(body.length)
  return body;
  else throw new Error("Something Bad occured");
}