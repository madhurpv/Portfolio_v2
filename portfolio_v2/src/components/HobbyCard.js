import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { withRouter } from './withRouter';
import './Styling/HobbyCard.css';

class HobbyCard extends Component {
  handleClick = () => {
    const { id, navigate } = this.props;
    if (id === 'photography') {
      navigate('/hobbies/photography');
    }
    // Add navigation for other hobbies
  };

  render() {
    const { title, description, image } = this.props;
    return (
      <div className="hobby-card" onClick={this.handleClick}>
        <div className="hobby-image-container">
          <img src={image} alt={title} className="hobby-image" />
        </div>
        <div className="hobby-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(HobbyCard);