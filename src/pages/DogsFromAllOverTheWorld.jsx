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
    <div className='absolute top-0 h-screen bg-red-400 w-full'>
      <div className='text-center relative'>
        <div className="title h-36 mt-8 mb-6">
          <h1 className='text-5xl font-bold text-yellow-200 -mb-2 tracking-tighter transition hover:scale-110'>DOGS</h1>
          <h1 className='font-bold text-white tracking-widest '>from all over the</h1>
          <h1 className='text-5xl font-bold text-yellow-200 -mt-2 tracking-tighter transition hover:scale-110'>World</h1>
        </div>
        {imageUrl ? (
          <div className="dog-card flex items-center h-96 mx-auto">
            <img style={{ ...styles, objectFit: 'contain', width: '100%' }} className='h-full mx-auto p-5 rounded-3xl hover:scale-105 transition' src={imageUrl} alt="Dog Image" />
          </div>
        
        
        ) : (<h1>Loading Dog Image</h1>)}
        <div className='flex justify-center absolute w-full'>
          <div className='flex justify-between mt-20'>
            <button className='bg-gradient-to-t from-yellow-300 to-yellow-200 border-8 border-yellow-200 mr-10 px-5 font-bold rounded-2xl text-xl hover:scale-110 transition' onClick={fetchDogImage}>Cute Dog</button>
            <button className='bg-gradient-to-t from-yellow-300 to-yellow-200 border-8 border-yellow-200 ml-10 p-4 font-bold rounded-2xl text-xl hover:scale-110 transition' onClick={fetchDogImage}>Nah Dog</button>
          </div>
        </div>
      </div>
    </div>
  );
};
