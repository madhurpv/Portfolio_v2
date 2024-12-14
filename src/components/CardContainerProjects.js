import React, { Component } from 'react';
import './Styling/CardContainerProjects.css'; 
import SquareCardProjects from './SquareCardProjects';

class CardContainerProjects extends Component {
  render() {
    const { cards } = this.props;

    return (
      <div className="card-container">
        {cards.map((card, index) => (
          <div>
            <SquareCardProjects 
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              blogtype={card.blogtype}
              typecolour={card.typecolour}
              link={card.link}
              logos={card.logos}
              logolinks={card.logolinks}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default CardContainerProjects;
