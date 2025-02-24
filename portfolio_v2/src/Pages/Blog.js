
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import CardContainerBlog from '../components/CardContainerBlog';

const cardsData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg',
    title: 'Card 1',
    blogtype: 'Travel',
    description: 'This is the first card description.',
    link: '/#/blog1'
  }
];

function modifyCardsData(cardsData) {
  console.log(cardsData);
  if (cardsData.length === 0){
    return cardsData;
  }
  if (cardsData[0].typecolour !== undefined){
    return cardsData;
  }
  for (var i=0; i<cardsData.length; i++) {
    //console.log(cardsData[i]);
    if (cardsData[i].blogtype === "Travel"){
      cardsData[i].typecolour = "#FF8000";
    }
    if (cardsData[i].blogtype === "Tech"){
      cardsData[i].typecolour = "#1150F0";
    }
  }
  return cardsData;
}

class Blog extends Component {
  
  render() {
    modifyCardsData(cardsData);

    return (
      <div className="centre">
        <Title title="Blog" />
        <p>This is My Blog</p>
        <CardContainerBlog cards={cardsData} />
      </div>
    );
  }
}

export default Blog;