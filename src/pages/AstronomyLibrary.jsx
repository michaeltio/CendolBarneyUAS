import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NASALibraryImages(){
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://images-api.nasa.gov/search?q=mercury'
        );
        if (response.data.collection.items.length > 0) {
          setImages(response.data.collection.items);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>NASA Library Images</h1>
      <div>
        {images.map((image) => (
          <div key={image.data[0].nasa_id}>
            <p>{image.data[0].title}</p>
            <img
              src={image.links[0].href}
              alt={image.data[0].title}
              style={{ width: '300px', height: '300px' }}
            />
            <p>{image.data[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
