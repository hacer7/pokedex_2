import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FavouritesPage from './pages/FavouritesPage';
import HomePage from './pages/HomePage';
import 'antd/dist/antd.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;