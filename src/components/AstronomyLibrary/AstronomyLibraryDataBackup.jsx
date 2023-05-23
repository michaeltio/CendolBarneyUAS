import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';

const NASAImagesComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://images-api.nasa.gov/search?q=venus').then((response) => {
      console.log(response.data.collection.items);
    })
    .catch((error) =>{
      console.log(error);
    })

    const fetchImages = async () => {
      try {
        // const response = await fetch('https://images-api.nasa.gov/search?q=venus')
        // .then((response) => {
        //   console.log(response);
        // })
        const data = await response.json();
        const items = data.collection.items;
        const parsedImages = items.map((item) => ({
          href: item.links[0].href,
          title: item.data[0].title,
          description: item.data[0].description,
        }));
        //console.log(response);
        setImages(parsedImages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>NASA Images</h1>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <h1>{image.title}</h1>
            <img src={image.href}/>
            <p>{image.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NASAImagesComponent;
