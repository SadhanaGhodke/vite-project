import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Reading from './components/Reading';



import Services from './components/Services';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/reading" element={<Reading />} />
                <Route path="/services" element={<Services />} />
                
            </Routes>
            
            <Footer />
        </Router>
    );
};

export default App;

