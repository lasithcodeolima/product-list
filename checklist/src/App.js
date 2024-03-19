import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Wallpaper from './screen/Wallpaper';
import Signup from './screen/Signup';
import Signin from './screen/Signin';
import Animation from './screen/Animation';



function App() {
  return (
    <div>
     
    <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Wallpaper" element={<Wallpaper/>}/>
      <Route path="/Animation" element={<Animation/>}/>
    </Routes>
    </div>
  );
}

export default App;
