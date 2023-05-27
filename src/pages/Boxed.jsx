import React, { useState } from 'react';

function Boxed() {
  const [boxSize, setBoxSize] = useState(40); // Initial size of the box
  const [boxRadius, setBoxRadius] = useState(0); // Initial size of the box
  const [boxColor, setBoxColor] = useState('#030b40'); // Initial color of the box
  const [boxBorderColor, setBoxBorderColor] = useState('#ffffff'); // Initial color of the box border
  const [boxBorderSize, setBoxBorderSize] = useState(2); // Initial size of the box border
  const [boxPosition, setBoxPosition] = useState({ top: 350, left: 230 }); // Initial position of the box
  const [boxVisibility, setBoxVisibility] = useState('visible'); // Initial visibility of the box
  const [showBorder, setShowBorder] = useState(false); // Whether to show the box border
  const [isCircle, setIsCircle] = useState(false); // Whether the box is in circle shape

  const increaseBoxSize = () => {
    setBoxSize(boxSize + 10); // Increase the box size by 10
  };

  const decreaseBoxSize = () => {
    setBoxSize(boxSize - 10); // Decrease the box size by 10
  };

  const toggleShape = () => {
    setIsCircle(prevIsCircle => !prevIsCircle); // Toggle between circle and square shape
  };

  const changeBoxColor = () => {
    const randomColor = getRandomColor();
    setBoxColor(randomColor);
  };

  const changeBoxBorderColor = () => {
    const randomColor = getRandomColor();
    setBoxBorderColor(randomColor);
  };

  const changeBoxBorderSize = () => {
    setBoxBorderSize(prevSize => {
      if (prevSize >= 10) {
        return 2; // Reset to the thinnest size if already at the thickest size
      } else {
        return prevSize + 2; // Increase border size by 2
      }
    });
  };

  const toggleBoxVisibility = () => {
    setBoxVisibility(prevVisibility => (prevVisibility === 'visible' ? 'hidden' : 'visible')); // Toggle between visible and hidden
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

  const resetBox = () => {
    setBoxSize(40); // Reset box size to initial value
    setBoxRadius(0); // Reset box radius to initial value
    setBoxColor('#030b40'); // Reset box color to initial value
    setBoxBorderColor('#ffffff'); // Reset box border color to initial value
    setBoxBorderSize(2); // Reset box border size to initial value
    setBoxPosition({ top: 350, left: 230 }); // Reset box position to initial value
    setBoxVisibility('visible'); // Reset box visibility to initial value
    setShowBorder(false); // Reset show border to initial value
    setIsCircle(false); // Reset shape to square
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

  const toggleBorder = () => {
    setShowBorder(prevShowBorder => !prevShowBorder);
  };

  return (
    <div className="bg-sky-300 h-screen">
      <div className="title absolute top-20 left-1/2 -translate-x-1/2 border-8 border-sky-400 p-2 z-30">
        <h1 className="font-bold text-4xl md:text-6xl text-sky-600">BOXED</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2 absolute top-1/2 left-10 -translate-y-1/2 z-20 md:top-3/4">
        <button
          onClick={toggleBoxVisibility}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Show
        </button>
        <button
          onClick={increaseBoxSize}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Big
        </button>
        <button
          onClick={decreaseBoxSize}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Small
        </button>
        <button
          onClick={toggleShape}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Shape
        </button>
        <button
          onClick={changeBoxColor}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Color
        </button>
        <button
          onClick={toggleBorder}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Border
        </button>
        <button
          onClick={changeBoxBorderColor}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Border Color
        </button>
        <button
          onClick={changeBoxBorderSize}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Border Size
        </button>
        <button
          onClick={() => moveBox('up')}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Up
        </button>
        <button
          onClick={() => moveBox('down')}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Down
        </button>
        <button
          onClick={() => moveBox('left')}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Left
        </button>
        <button
          onClick={() => moveBox('right')}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Right
        </button>
        <button
          onClick={resetBox}
          className="bg-sky-500 border-4 border-sky-600 w-20 rounded-lg text-sky-800 font-bold"
        >
          Reset
        </button>
      </div>
      <div
        className={`box absolute z-0 transition-all ${isCircle ? 'rounded-full' : ''}`}
        style={{
          width: boxSize,
          height: boxSize,
          backgroundColor: boxColor,
          borderColor: boxBorderColor,
          borderWidth: showBorder ? boxBorderSize : 0,
          top: boxPosition.top,
          left: boxPosition.left,
          visibility: boxVisibility,
        }}
      ></div>
    </div>
  );
}

export default Boxed;
