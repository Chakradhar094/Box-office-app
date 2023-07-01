import { useParams } from 'react-router-dom';
import { majeapi } from '../api/tvmaje';
import React, { useState, useEffect } from 'react';
const Show = () => {
  const { showId } = useParams();

  const [data, setdata] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await majeapi(`/shows/${showId}`);
        
        setdata(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [showId]);
  console.log(data);

  return (
    <div>
      hi
      {showId}
    </div>
  );
};
export default Show;
