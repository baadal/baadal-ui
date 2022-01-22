import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import ButtonDemo from './demo/button-demo';
import ButtonPreview from './preview/button-preview';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="button-demo" element={<ButtonDemo />} />
        <Route path="button-preview" element={<ButtonPreview />} />
      </Routes>
    </div>
  );
}

export default App;
