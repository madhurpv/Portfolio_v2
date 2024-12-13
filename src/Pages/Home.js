
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import './Styling/Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      images: [
        'https://via.placeholder.com/1200x500?text=Image+1', // Example image 1
        'https://via.placeholder.com/1200x500?text=Image+2', // Example image 2
        'https://via.placeholder.com/1200x500?text=Image+3', // Example image 3
        'https://via.placeholder.com/1200x500?text=Image+4', // Example image 4
        'https://via.placeholder.com/1200x500?text=Image+5', // Example image 5
      ],
    };
  }

  componentDidMount() {
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

        {/* Rounded Rectangle with Background Image */}
        <div className="rounded-rectangle"
          style={{
            backgroundImage: `url(${currentImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignContent:"center", minHeight: "80%"
          }}
        >
          <div className="content">
            {/* Add any content inside this box */}
            <p className="noto-sans-700-home" style={{fontSize: "200%"}}>Hi There!</p><br/>
            <p className="noto-sans-300-home" style={{fontSize: "120%"}}>I am <b>Madhur Vaidya</b>. I am a student at the Vishwakarma Institute of Technology, Pune, learning Computer Engineering.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;