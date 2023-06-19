import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick a color</button>
      {showColors && (
        <div style={{ marginTop: '10px' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                display: 'inline-block',
                marginRight: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
      {selectedColor && (
        <div style={{ marginTop: '10px' }}>
          <span>Selected color : </span>
          <div
            style={{
              backgroundColor: selectedColor,
              width: '30px',
              height: '30px',
              display: 'inline-block',
              marginLeft: '5px',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
