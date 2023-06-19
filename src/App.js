import React from 'react';
import ColorPicker from './ColorPicker';
import "./App.css"

function App() {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#C0C0C0', '#800080', '#FFA500', '#008000']

  return (
    <div className='App'>
    <ColorPicker colors={colors}/>
    </div>
  )


};

export default App;
