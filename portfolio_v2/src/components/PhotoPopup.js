import React, { Component } from 'react';
import './Styling/PhotoPopup.css';

class PhotoPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touchStart: 0,
      touchEnd: 0
    };
    this.popupRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    if (this.popupRef.current) {
      this.popupRef.current.focus();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    const { photos, currentIndex, onNext, onPrev } = this.props;
    
    switch (e.key) {
      case 'ArrowRight':
        onNext();
        break;
      case 'ArrowLeft':
        onPrev();
        break;
      case 'Escape':
        this.props.onClose();
        break;
      default:
        break;
    }
  };

  handleTouchStart = (e) => {
    this.setState({ touchStart: e.targetTouches[0].clientX });
  };

  handleTouchMove = (e) => {
    this.setState({ touchEnd: e.targetTouches[0].clientX });
  };

  handleTouchEnd = () => {
    const { touchStart, touchEnd } = this.state;
    const { onNext, onPrev } = this.props;
    
    if (touchStart - touchEnd > 50) {
      // Swipe left
      onNext();
    } else if (touchEnd - touchStart > 50) {
      // Swipe right
      onPrev();
    }
  };

  render() {
    const { photo, photos, currentIndex, onClose, showInfo, toggleInfo, onNext, onPrev } = this.props;

    return (
      <div 
        className="photo-popup-overlay" 
        onClick={onClose}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div 
          className="photo-popup-content" 
          onClick={e => e.stopPropagation()}
          ref={this.popupRef}
          tabIndex="0"
        >
          <button className="close-button" onClick={onClose}>×</button>
          
          {currentIndex > 0 && (
            <button className="nav-button prev-button" onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}>
              &#10094;
            </button>
          )}
          
          <div className="photo-container">
            <img 
              src={photo.path} 
              alt={photo.title} 
              className="popup-photo" 
            />
            
            {showInfo && (
              <div className="photo-info">
                <h2>{photo.title}</h2>
                <p>{photo.description}</p>
                <div className="photo-meta">
                  <span>Date: {photo.date}</span>
                  <span>Location: {photo.location}</span>
                </div>
              </div>
            )}
          </div>
          
          {currentIndex < photos.length - 1 && (
            <button className="nav-button next-button" onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}>
              &#10095;
            </button>
          )}
          
          <button 
            className="toggle-info-button"
            onClick={(e) => {
              e.stopPropagation();
              toggleInfo();
            }}
          >
            {showInfo ? 'Hide Info' : 'Show Info'}
          </button>
        </div>
      </div>
    );
  }
}

export default PhotoPopup;