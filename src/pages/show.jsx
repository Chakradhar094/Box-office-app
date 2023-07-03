import { Link, useParams } from 'react-router-dom';
import { majeapi } from '../api/tvmaje';
import React, { useState, useEffect } from 'react';
import Showmaindata from '../components/shows/showmaindata';
import Showdetails from '../components/shows/showdetails';
import { styled } from 'styled-components';


const useCustomHook=(showId)=>{
  const [data, setdata] = useState(null);
  const [error,seterror]=useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await majeapi(`/shows/${showId}`);
        
        setdata(response);
      } catch (err) {
        seterror(err);
      }
    }
    fetchData();
  }, [showId]);

  return {data,error}
}
const Show = () => {
  
  const { showId } = useParams();
   
  const {data,error}=useCustomHook(showId);
   console.log(data);
   const fun=()=>{
    if(data){
      return<div>
         <Showmaindata 
      name={data.name}
      genres={data.genres}
      rating={data.rating}
      image={data.image}
      summary={data.summary}
    />
    <InfoBlock 

    />
    </div>
    }
    if(error){
      return <div>No results</div>
    }
    return <div>Data is loading</div>
   }
    
  return (
   
    <ShowPageWrapper>
      <BackHomeWrapper >
      
      {fun()}
     
      <Link to="/" ><button>Go back</button></Link>
      </BackHomeWrapper >
    </ShowPageWrapper>
  );
};
export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;