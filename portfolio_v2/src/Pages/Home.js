
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import './Styling/Home.css';

import image1 from '../components/assets/home_images/Image1.jpg'
import image2 from '../components/assets/home_images/Image2.jpg'
import image3 from '../components/assets/home_images/Image3.jpg'
import image4 from '../components/assets/home_images/Image4.jpg'
import image5 from '../components/assets/home_images/Image5.jpg'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      images: [
        image1,
        image2,
        image3,
        image4,
        image5,        
      ],
    };
  }

  componentDidMount() {
    const imagesPreload = [image1, image2, image3, image4, image5];
    imagesPreload.forEach((image) => {
        const newImage = new Image();
        newImage.src = image;
        window[image] = newImage;
    });

    this.imageInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentImageIndex: (prevState.currentImageIndex + 1) % prevState.images.length,
      }));
    }, 3000); // Change image every 3 seconds
  }

  componentWillUnmount() {
    clearInterval(this.imageInterval); // Clean up interval on component unmount
  }

  render() {

    const { currentImageIndex, images } = this.state;
    const currentImage = images[currentImageIndex];
    
    return (
      <div className="centre">
        <Title title="Welcome" />
        <br />

        <div className="rounded-rectangle-blur"
          style={{
            backgroundImage: `url(${currentImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignContent:"center", minHeight: "90%"
          }}
        ></div>
        <div className="rounded-rectangle"
          style={{
            alignContent:"center", minHeight: "90%"
          }}
        >
          <div className="content">
            {/* Add any content inside this box */}
            <p className="noto-sans-700-home" style={{fontSize: "200%", textShadow:"0 2px 2px rgba(0, 0, 0, 1)"}}>Hi There!</p><br/>
            <p className="noto-sans-300-home" style={{fontSize: "120%", textShadow:"0 2px 2px rgba(0, 0, 0, 1)"}}>I am <b>Madhur Vaidya</b>. I am a student at the Vishwakarma Institute of Technology, Pune, learning Computer Engineering.<br/></p>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;