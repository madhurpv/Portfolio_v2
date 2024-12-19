// src/Navbar.js
import React, { Component } from 'react';
import './Styling/Navbar.css';
import { Router } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        menuOpen: false, // Track whether the mobile menu is open or closed
      };
    }
  
    toggleMenu = () => {
      this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
    };
  
    render() {
      return (
        <div className="navbar">
        {/* Hamburger Menu for mobile */}
        <div className="hamburger" onClick={this.toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>

        {/* Menu */}
        <div className={`menu ${this.state.menuOpen ? 'active' : ''}`}>
            <ul>
            <li><a href="/portfolio/">Home</a></li>
            <li><a href="/portfolio/#/about">About Me</a></li>
            <li><a href="/portfolio/#/projects">Projects</a></li>
            <li><a href="/portfolio/#/resume">Resume</a></li>
            <li><a href="/portfolio/#/hobbies">Hobbies</a></li>
            <li><a href="/portfolio/#/blog">Blog</a></li>
            <li><a href="/portfolio/#/contact">Contact</a></li>
            </ul>
        </div>
        </div>
      );
    }
  }
  
  export default Navbar;