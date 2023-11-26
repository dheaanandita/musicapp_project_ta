import React from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import './App.css';
import About from './pages/About';
import Categories from './pages/Categories';
import Leaderboards from './pages/Leaderboards';
import Home from './pages/Home';
import MusicbyCategory from './pages/MusicbyCategory';
import TrackDetail from './pages/TrackDetail';
import ProfileDetail from './pages/ProfileDetail';

function App() {
  return (
    <>
      <div className="App">
        <header>🎵 Music App</header>
        <div className="content">
          {/* deklarasi route yang digunakan */}
          <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />
          
          {/* halaman detail track atau song, 
              contoh: detail/1 
                      detail/2 
                      detail/3
          */}
          <Route path="/detail/:id" element={<TrackDetail />} />

          {/* halaman detail profile,
              contoh: profile/1
                      profile/2
                      profile/3
          */}
          <Route path="/artist/:id" element={<ProfileDetail />} />

          {/* halaman kategori*/}
          <Route path="/categories" element={<Categories />} />
          
          {/* halaman kategori berdasarkan id,
              contoh: categories/pop
                      categories/rock
                      categories/jazz
          */}      
          <Route path="/categories/:genre" element={<MusicbyCategory />} />

          {/* halaman leaderboards */}
          <Route path="/leaderboards" element={<Leaderboards />} />

          {/* halaman about */}
          <Route path="/about" element={<About />} />
          
          {/* jika selain halaman diatas, maka akan diarahkan ke halaman 404 */}
          <Route path="*" element={<div>404 Not found</div>} />
          </Routes>
        </div>
    <footer>
    <div className="containernav">
      {/* navlink untuk berpindah route/halaman */}
        <NavLink to="/" className="navbar">
          Home
        </NavLink>
        <NavLink to="/categories" className="navbar">
          Categories
        </NavLink>
        <NavLink to="/leaderboards" className="navbar">
          Leaderboards
        </NavLink>
        <NavLink to="/about" className="navbar">
          About
        </NavLink>
      </div>
    </footer>
      </div>
    </>
  );
}

export default App;
