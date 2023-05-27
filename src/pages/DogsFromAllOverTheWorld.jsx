import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DogImage() {
  const [imageUrl, setImageUrl] = useState('');
  const [isFirstRender, setFirstRender] = useState(true);

  const fetchDogImage = () => {
    axios
      .get('https://api.thedogapi.com/v1/images/search')
      .then(response => {
        const dogImageUrl = response.data[0].url;
        setImageUrl(dogImageUrl);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    if (!isFirstRender) {
      fetchDogImage();
    } else {
      setFirstRender(false);
    }
  }, [isFirstRender]);

  const styles = {
    maxWidth : "500px",
    maxHeight : "500px",
    width: "auto",
    height : "auto"
  };

  return (
    <div className='text-center relative'>
      <h1 className='text-5xl mt-10 mb-20'>Dogs From All Over The World</h1>
      {imageUrl ? (
        <div className="dog-card flex items-center h-96 mx-auto">
          <img style={{ ...styles, objectFit: 'contain' }} className='h-full mx-auto' src={imageUrl} alt="Dog Image" />
        </div>
      
        ) : (<h1>Loading Dog Image</h1>)}
      <div className='flex justify-center absolute w-full'>
        <div className='flex justify-between mt-20'>
          <button className='bg-green-500 mr-10 p-5' onClick={fetchDogImage}>cute dog</button>
          <button className='bg-red-500 ml-10 p-5' onClick={fetchDogImage}>nah dog</button>
        </div>
      </div>
    </div>
  );
};
