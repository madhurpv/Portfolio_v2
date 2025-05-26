import React, { Component } from 'react';
import PhotographySectionCard from '../components/PhotographySectionCard';
import photographyData from './../components/assets/Hobbies/HobbyPhotographyPaths.json';
import './Styling/Photography.css';

class Photography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: Object.keys(photographyData).map(key => ({
        id: key,
        title: key.charAt(0).toUpperCase() + key.slice(1),
        coverImage: photographyData[key][0].path
      }))
    };
  }

  render() {
    return (
      <div className="photography-container">
        <h1>Photography</h1>
        <p className="photography-description">Explore my photography collections</p>
        <div className="photography-grid">
          {this.state.sections.map(section => (
            <PhotographySectionCard
              key={section.id}
              id={section.id}
              title={section.title}
              coverImage={"/portfolio" + section.coverImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Photography;