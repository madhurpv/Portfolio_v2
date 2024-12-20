
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import './Styling/Home.css';
import CardContainerProjects from '../components/CardContainerProjects';

import PPT from "../components/assets/Projects/PPT.png"
import GithubLogo from "../components/assets/Projects/GitHub_Invertocat_Light.png"

import ProjectFAST from "../components/assets/Projects/Images/ProjectFAST.png"

import PPTFAST from "../components/assets/Projects/Docs/PPTFAST.pdf"


const cardsData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    title: 'Card 1',
    blogtype: 'Travel',
    description: 'This is the first project. I have done a lot of things in this project, including a lot of things too! Not just that, but a few other things too were done.',
    link: '/blog1',
    logos: [
      'https://vit.edu/wp-content/uploads/2024/03/image02.webp', 
      'https://www.vit.edu/wp-content/uploads/2024/09/Frame-148321-1.webp'
    ],
    logolinks: [
      'https://vit.edu/wp-content/uploads/2024/03/image02.webp', 
      'https://www.vit.edu/wp-content/uploads/2024/09/Frame-148321-1.webp'
    ]
  },
  {
    image: ProjectFAST,
    title: 'FAST - FAST Attendance System Technology',
    blogtype: 'Android and Windows app',
    description: 'Created a proxy-proof attendance-taking system for colleges and proffesional conferences and seminars. Won second Prize in <a href="https://pictinc.org/" className="cool-link" target="_blank" rel="noopener noreferrer">Impetus</a> 2023 in Applications domain',
    link: '/blog1',
    logos: [
      PPT, 
      GithubLogo
    ],
    logolinks: [
      PPTFAST,
      "https://github.com/MrPopatRao-DoingCoding/AttendancewithPopatrao"
    ]
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 3',
    blogtype: 'Tech',
    description: 'This is the third card description.',
    link: '/blog1',
    logos: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/375px-Flower_poster_2.jpg', 
      'https://www.vit.edu/wp-content/uploads/2024/09/Frame-148321-1.webp'
    ],
    logolinks: [
      'https://vit.edu/wp-content/uploads/2024/03/image02.webp', 
      'https://www.vit.edu/wp-content/uploads/2024/09/Frame-148321-1.webp'
    ]
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 4',
    blogtype: 'Travel',
    description: 'This is the fourth card description.',
    link: '/blog1',
    logos: [
      'https://vit.edu/wp-content/uploads/2024/03/image02.webp', 
      'https://www.vit.edu/wp-content/uploads/2024/09/Frame-148321-1.webp'
    ],
    logolinks: [
      'https://vit.edu/wp-content/uploads/2024/03/image02.webp', 
      'https://www.vit.edu/wp-content/uploads/2024/09/Frame-148321-1.webp'
    ]
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    title: 'Card 5',
    blogtype: 'Timepass',
    description: 'This is the last project. I have done a lot of things in this project, including a lot of things too! Not just that, but a few other things too were done.',
    link: '/blog1',
    logos: [
      'https://vit.edu/wp-content/uploads/2024/03/image02.webp', 
      'https://www.vit.edu/wp-content/uploads/2024/09/Frame-148321-1.webp'
    ],
    logolinks: [
      'https://vit.edu/wp-content/uploads/2024/03/image02.webp', 
      'https://www.vit.edu/wp-content/uploads/2024/09/Frame-148321-1.webp'
    ]
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


class Projects extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="Welcome" />
        <br />
        <p className="noto-sans-300">These are projects</p>
        <CardContainerProjects cards={cardsData} />
      </div>
    );
  }
}

export default Projects;