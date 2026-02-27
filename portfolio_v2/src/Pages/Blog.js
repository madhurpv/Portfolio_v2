
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import CardContainerBlog from '../components/CardContainerBlog';


import Blog2Img from "../components/assets/Blogs/Images/Blog2.jpg"
import Blog3Img from "../components/assets/Blogs/Images/Blog3.jpg"
import Blog4Img from "../components/assets/Blogs/Images/Blog4.jpg"



const cardsData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg',
    title: 'Blog 1',
    blogtype: 'Travel',
    description: 'This is the first blog. Temporary blog.',
    link: '/#/blog1'
  },
  {
    image: Blog2Img,
    title: 'Calculate how far that raptor is!',
    blogtype: 'Birds',
    description: 'Calculate how far a raptor is soaring from you by using Bird Altitude Estimator',
    link: '/#/blog2'
  },
  {
    image: Blog3Img,
    title: 'Hobby of Hobby!',
    blogtype: 'Birds',
    description: "Celebrating the cool 'Hobby' which has gifted all Punekars its presence time and again!",
    link: '/#/blog3'
  },
  {
    image: Blog4Img,
    title: 'Kauaʻi ʻōʻō and the great John Sincock!',
    blogtype: 'Birds',
    description: "The story of Kauaʻi ʻōʻō",
    link: '/#/blog4'
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