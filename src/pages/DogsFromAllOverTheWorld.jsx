import { useState } from 'react';

export default function DogImage() {
  const [imageUrl, setImageUrl] = useState('');

  const fetchDogImage = () => {
    fetch('https://api.thedogapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        const dogImageUrl = data[0].url;
        setImageUrl(dogImageUrl);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  const styles = {
    width: "500px"
  };

  return (
    <div className='text-center relative'>
      <h1 className='text-5xl'>Dog Vote</h1>
      {imageUrl && <img style={styles} className='w-1/2 mx-auto' src={imageUrl} alt="Dog Image" />}
      <div className='flex justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3/4'>
        <button className='bg-green-500 m-10 p-5' onClick={fetchDogImage}>cute dog</button>
        <button className='bg-red-500 m-10 p-5' onClick={fetchDogImage}>nah dog</button>
      </div>
    </div>
  );
};
