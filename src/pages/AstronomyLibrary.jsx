import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../components/SearchButton/SearchButton.css"

export default function AstronomyLibrary() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('earth');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${search}`);
        const items = response.data.collection.items;
        console.log(items);
        const parsedImages = items
        .filter((item) => {
          if (!item.links) return false;
          return true;
        })
        .map((item) => 
          ({
            href: item.links[0]?.href ?? '',
            title: item.data[0]?.title ?? '',
            description: item.data[0]?.description || '',
          })
        );
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
      setSearch(event.target.value);
    }
  };

  return (
    <div className='text-center items-center bg-gray-900 text-white pt-5'>
      <div className='title ml-14 mb-4 mt-12'>
        <h1 className='text-5xl font-bold mr-10'>Astronomy</h1> 
        <h1 className='absolute top-0 left-1/2 -translate-x-1/2 mt-28 -ml-16 text-5xl'>&#9733;</h1> 
        <h1 className='text-5xl font-bold -mt-1 ml-12'>Library</h1> 
      </div>
      <div className="group mb-6 mx-auto">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input
          type="text"
          id="default-input"
          className="input bg-slate-50 border border-black rounded mt-4 text-center placeholder-center text-black"
          onKeyPress={handleKeyPress}
          placeholder="Search For (ex. Jupiter)"
          autoComplete='off'
        />
      </div>
      <ul>
        {images.map((image, index) => (
          <li key={index} className='px-5'>
            <div className='mt-10 border border-white sm:w-1/2 mx-auto bg-gradient-to-bl from-gray-600 to-gray-900 transition hover:scale-105 rounded-3xl'>
              <h1 className='text-4xl mb-3 mt-3 font-bold p-4' >{image.title}</h1>
              <img className='mx-auto mb-3' src={image.href} />
              <p className='m-3 p-4'>{image.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}