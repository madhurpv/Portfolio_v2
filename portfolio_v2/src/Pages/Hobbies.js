
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import HobbyCard from '../components/HobbyCard';
import './Styling/Home.css';
import './Styling/Hobbies.css'

class Hobbies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hobbies: [
        {
          id: 'photography',
          title: 'Photography',
          description: 'My collection of nature and wildlife photos',
          image: '/photos/hobbies/photography.jpg'
        },
        // Add other hobbies here
        /*{
          id: 'painting',
          title: 'Painting',
          description: 'My acrylic and watercolor artworks',
          image: '/hobbies/painting.jpg'
        }*/
      ]
    };
  }

  render() {
    return (
      <div className="centre">
        <Title title="Welcome" />
        <br />
        <p className="noto-sans-300">These are Hobbies</p>
        <div className="hobbies-grid">
          {this.state.hobbies.map(hobby => (
            <HobbyCard 
              key={hobby.id}
              id={hobby.id}
              title={hobby.title}
              description={hobby.description}
              image={process.env.PUBLIC_URL + hobby.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Hobbies;