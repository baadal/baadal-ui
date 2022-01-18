import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import ButtonDemo from './demo/button-demo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="button-demo" element={<ButtonDemo />} />
      </Routes>
    </div>
  );
}

export default App;
