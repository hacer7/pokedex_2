import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FavouritesPage from './pages/FavouritesPage';
import HomePage from './pages/HomePage';
import 'antd/dist/antd.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/favourites' element={<FavouritesPage/>}/>
    </Routes>
  );
}

export default App;