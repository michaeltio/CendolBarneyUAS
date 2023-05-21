import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Quoty() {
  const category = '';
  const apiKey = 'qdg4xdeAsooYDE538jETSQ==gSkhZ93GlgbeHH9Z';
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json',
        });
        if (response.data.length > 0) {
          setQuote(response.data[0]);
          console.log(response.data)
        }
      } catch (error) {
        console.error('Error:', error.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{quote.quote}</h1>
      <h1>{quote.category}</h1>
      <h1>{quote.author}</h1>
    </div>
  );
}
