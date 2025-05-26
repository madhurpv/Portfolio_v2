import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import Title from '../../components/Title';
import PhotoPopup from '../../components/PhotoPopup';
import photographyData from './../../components/assets/Hobbies/HobbyPhotographyPaths.json';
import './../Styling/GalleryPage.css';

class GalleryPageTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: null,
      showInfo: true
    };
  }

  handlePhotoClick = (photo) => {
    this.setState({ selectedPhoto: photo });
  };

  handleClosePopup = () => {
    this.setState({ selectedPhoto: null });
  };

  toggleInfo = () => {
    this.setState(prevState => ({ showInfo: !prevState.showInfo }));
  };

  render() {
    const { section } = this.props;
    const { selectedPhoto, showInfo } = this.state;
    const photos = photographyData[section];

    const breakpointColumnsObj = {
      default: 2,
      1100: 2,
      700: 1,
      500: 1
    };

    return (
      <div className='centre'>
        <div className="gallery-page">
          <Title title={section.charAt(0).toUpperCase() + section.slice(1) + " Photography"} />

          
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="photo-item"
                onClick={() => this.handlePhotoClick(photo)}
              >
                <img 
                  src={process.env.PUBLIC_URL + photo.path} 
                  alt={photo.title} 
                  loading="lazy"
                />
              </div>
            ))}
          </Masonry>

          {selectedPhoto && (
            <PhotoPopup
              photo={{
                ...selectedPhoto,
                path: process.env.PUBLIC_URL + selectedPhoto.path
              }}
              photos={photos.map(p => ({
                ...p,
                path: process.env.PUBLIC_URL + p.path
              }))}
              currentIndex={photos.findIndex(p => p.path === selectedPhoto.path)}
              onClose={this.handleClosePopup}
              showInfo={showInfo}
              toggleInfo={this.toggleInfo}
              onNext={() => {
                const currentIndex = photos.findIndex(p => p.path === selectedPhoto.path);
                if (currentIndex < photos.length - 1) {
                  this.setState({ selectedPhoto: photos[currentIndex + 1] });
                }
              }}
              onPrev={() => {
                const currentIndex = photos.findIndex(p => p.path === selectedPhoto.path);
                if (currentIndex > 0) {
                  this.setState({ selectedPhoto: photos[currentIndex - 1] });
                }
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default GalleryPageTemplate;