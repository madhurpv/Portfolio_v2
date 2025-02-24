import React, { Component } from 'react';
import './Styling/SquareCardProjects.css'; 
import '../Pages/Styling/About.css'; 
import parse  from 'html-react-parser';

class SquareCardProjects extends Component {
  render() {
    const { image, title, description, blogtype, typecolour, logos, logolinks } = this.props;

    return (
      <div className="square-card-project">
        <img src={image} alt={title} className="square-card-image-project" />
        <div className="square-card-details-project">
          <h3 className="square-card-title-project">{title}</h3>
          <h3 className="square-card-type-project" style={{color: typecolour}}>{blogtype}</h3>
          <p className="square-card-description-project">{parse(description)}</p>

          <div class="bottom_aligner"></div>
          <div className="square-card-logos-project">
            {logos && logos.map((logo, index) => (
              <a key={index} href={logolinks[index]} target="_blank" rel="noopener noreferrer">
                <img key={index} src={logo} alt={`logo-${index}`} className="square-card-logo-project" />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SquareCardProjects;
