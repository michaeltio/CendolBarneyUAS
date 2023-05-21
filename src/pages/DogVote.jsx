import { useState } from 'react';

export default function DogImage(){
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

  return (
    <div>
      <button onClick={fetchDogImage}>Get Dog Image</button>
      <br />
      {imageUrl && <img src={imageUrl} alt="Dog Image" />}
    </div>
  );
};
