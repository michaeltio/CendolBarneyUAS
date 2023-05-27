import React, { useState } from 'react';

function Boxed() {
  const [boxSize, setBoxSize] = useState(40); // Initial size of the box
  const [boxRadius, setBoxRadius] = useState(0); // Initial size of the box
  const [boxColor, setBoxColor] = useState('#030b40'); // Initial color of the box
  const [boxPosition, setBoxPosition] = useState({ top: 350, left: 230 }); // Initial position of the box
  const [boxVisibility, setBoxVisibility] = useState("visible"); // Initial visibility of the box

  const increaseBoxSize = () => {
    setBoxSize(boxSize + 10); // Increase the box size by 10
  };

  const decreaseBoxSize = () => {
    setBoxSize(boxSize - 10); // Decrease the box size by 10
  };

  const makeBoxRound = () => {
    setBoxRadius('50%');
  };

  const makeBoxSquare = () => {
    setBoxRadius(0);
  };

  const changeBoxColor = () => {
    const randomColor = getRandomColor();
    setBoxColor(randomColor);
  };

  const showBox = () => {
    setBoxVisibility('visible');
  };

  const hideBox = () => {
    setBoxVisibility('hidden');
  };

  const moveBox = (direction) => {
    const step = 25; // Step size for movement
    setBoxPosition((prevPosition) => {
      let { top, left } = prevPosition;
  
      switch (direction) {
        case 'up':
          top -= step;
          break;
        case 'down':
          top += step;
          break;
        case 'left':
          left -= step;
          break;
        case 'right':
          left += step;
          break;
        default:
          break;
      }
  
      return { top, left };
    });
  };
  

  // Helper function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className='bg-sky-300 h-screen'>
      <div className='title absolute top-20 left-1/2 -translate-x-1/2 border-8 border-sky-400 p-2 z-30'>
        <h1 className="font-bold text-4xl md:text-6xl text-sky-600">BOXED</h1>
      </div>
      <div className='grid absolute top-1/2 left-10 -translate-y-1/2 z-20'>
        <button onClick={showBox} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Show</button>
        <button onClick={hideBox} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Hide</button>
        <button onClick={increaseBoxSize} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Big</button>
        <button onClick={decreaseBoxSize} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Small</button>
        <button onClick={makeBoxRound} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Circle</button>
        <button onClick={makeBoxSquare} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Square</button>
        <button onClick={changeBoxColor} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Color</button>
        <button onClick={() => moveBox('up')} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Up</button>
        <button onClick={() => moveBox('down')} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Down</button>
        <button onClick={() => moveBox('left')} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Left</button>
        <button onClick={() => moveBox('right')} className='bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold'>Right</button>
      </div>
      <div
        className="box absolute  z-0 transition-all" 
        style={{
          width: boxSize,
          height: boxSize,
          borderRadius: boxRadius,
          backgroundColor: boxColor,
          top: boxPosition.top,
          left: boxPosition.left,
          visibility: boxVisibility,
        }}
      ></div>
    </div>
  );
}

export default Boxed;
