import React, { useState } from 'react'
import logo from '../assets/react-logo.svg'
import Example0 from './components/Example0_state';
import Example1 from './components/Example1_props';

function App() {
  return (
    <div className="react-app">
      <div className="text-center">
        <img src={logo} className="logo" />
      </div>
      <Example0 />
      <Example1 name="milkmidi" data-value="9527" />
    </div>
  )
}

export default App
