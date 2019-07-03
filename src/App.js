import React from 'react';
import Demo from './Demo'
import './App.css'

function App() {
  return (
    <div>
      <Demo id={1} update={true}/>
      <Demo id={2} update={false}/>
    </div>
  );
}

export default App;
