import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../components/QuotyButton/QuotyButton.css"

export default function Quoty() {
  const category = '';
  const apiKey = 'qdg4xdeAsooYDE538jETSQ==gSkhZ93GlgbeHH9Z';
  const [quote, setQuote] = useState('');
  const [isFirstRender, setFirstRender] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json',
        }
      );
      if (response.data.length > 0) {
        setQuote(response.data[0]);
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  useEffect(() => {
    if (!isFirstRender) {
      fetchData();
    } else {
      setFirstRender(false);
    }
  }, [isFirstRender]);

  const handleNewQuote = () => {
    fetchData();
  };

  return (
    <div className='text-center mt-20'>
      <div className='m-5'>
        <h1 className='text-6xl'>Quoty</h1>
        <h1>{quote.category}</h1>
        <div className='sm:w-1/3 mx-auto text-3xl mt-10'>
          <h1>&ldquo;{quote.quote}&ldquo;</h1>
          <h1 className='text-xl font-bold mt-5'>&#8212; {quote.author}</h1>
        </div>
        <button
          className='mt-20 mb-10 button type1'
          onClick={handleNewQuote}
        >
          <span className="btn-txt">Next Quote</span>
        </button>
      </div>
    </div>
  );
}
