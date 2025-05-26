import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import { withRouter } from './withRouter';
import './Styling/PhotographySectionCard.css';

class PhotographySectionCard extends Component {
  handleClick = () => {
    const { id, navigate } = this.props;
    navigate(`/hobbies/photography/${id}`);
  };

  render() {
    const { title, coverImage } = this.props;
    return (
      <div className="photography-section-card" onClick={this.handleClick}>
        <div className="section-image-container">
          <img src={coverImage} alt={title} className="section-image" />
          <div className="section-overlay">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotographySectionCard);