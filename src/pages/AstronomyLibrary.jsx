import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../components/SearchButton/SearchButton.css"

export default function AstronomyLibrary(){
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${search}`);
        const items = response.data.collection.items;
        const parsedImages = items.map((item) => ({
          href: item.links[0]?.href || '',
          title: item.data[0]?.title || '',
          description: item.data[0]?.description || '',
        }));
        setImages(parsedImages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, [search]);

  //search bar
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(event.target.value);
      setSearch(event.target.value);
    }
  };

  return (
    <div className='text-center items-center'>
      <h1 className='text-5xl'>Astronomy Library</h1>
      <input
        type="text"
        id="default-input"
        className="input bg-slate-50 border border-black rounded w-48 mt-4 text-center placeholder-center text-black"
        onKeyPress={handleKeyPress}
        placeholder="Enter City..."/>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <div className='mt-10 border border-black sm:w-1/2 mx-auto'>
              <h1 className='text-4xl mb-3' >{image.title}</h1>
              <img className='mx-auto mb-3' src={image.href}/>
              <p className='m-3'>{image.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}