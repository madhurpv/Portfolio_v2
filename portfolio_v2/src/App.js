import logo from './logo.svg';
import Left from './components/Left';
import Right from './components/Right';
import Home from './Pages/Home';
import About from './Pages/About';
import Hobbies from './Pages/Hobbies';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Blog from './Pages/Blog';
import Navbar from './components/Navbar';

import Blog1 from './Pages/Blog/Blog1';


import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import React, {Component} from 'react';
import './App.css';

//IMPPPPPP: If PDF Not seen on Resume.js and error like versions are different, install : npm i --save --save-exact pdfjs-dist@4.4.168

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          {/* Navbar component for top navigation */}
          <Navbar />

          
          {/* Main Layout */}
          <div className="layout-container">

            <Left />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog1" element={<Blog1 />} />
            </Routes>
            <Right />

          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;