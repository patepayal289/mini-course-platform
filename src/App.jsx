import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetail />} /> {/* Route to view course details */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
