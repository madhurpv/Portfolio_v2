
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import './Styling/Home.css';
import CardContainerProjects from '../components/CardContainerProjects';

import PPT from "../components/assets/Projects/PPT.png"
import GithubLogo from "../components/assets/Projects/GitHub_Invertocat_Light.png"
import YouTubeLogo from "../components/assets/Projects/yt_logo_mono_dark.png"

import ProjectFASTImg from "../components/assets/Projects/Images/ProjectFAST.png"
import ProjectMarathiSentimentImg from "../components/assets/Projects/Images/ProjectMarathiSentiment.png"
import ProjectBlockchainImg from "../components/assets/Projects/Images/ProjectBlockchain.png"
import ProjectGaleShapelyImg from "../components/assets/Projects/Images/ProjectGaleShapely.png"
import ProjectAssemblyImg from "../components/assets/Projects/Images/ProjectAssembly.png"
import ProjectDigitalTwinImg from "../components/assets/Projects/Images/ProjectDigitalTwin.png"
import ProjectMarathiGANImg from "../components/assets/Projects/Images/ProjectMarathiGAN.png"


import PPTFAST from "../components/assets/Projects/Docs/PPTFAST.pdf"
import PPTPetiChain from "../components/assets/Projects/Docs/PPTPetiChain.pdf"
import PPTGaleShapely from "../components/assets/Projects/Docs/PPTGaleShapely.pdf"
import PPTAssembly from "../components/assets/Projects/Docs/PPTAssembly.pdf"
import PPTDigitalTwin from "../components/assets/Projects/Docs/PPTDigitalTwin.pdf"
import PPTMarathiGAN from "../components/assets/Projects/Docs/PPTMarathiGAN.pdf"


const cardsData = [
  {
    image: ProjectFASTImg,
    title: 'FAST - FAST Attendance System Technology',
    blogtype: 'Android Application (Java), Windows Application (Python)',
    description: 'Created a proxy-proof attendance-taking system for colleges and professional conferences and seminars, based on the technology of Dynamic QR Codes. Won <span className="gradient-yellow-text">Second Prize</span> in <a href="https://pictinc.org/" className="cool-link" target="_blank" rel="noopener noreferrer">Impetus</a> 2023 in Applications domain',
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
    image: ProjectMarathiSentimentImg,
    title: 'Sentiment Analysis of Marathi Texts using Deep Learning Models',
    blogtype: 'Deep Learning',
    description: 'Fine-tuned several large models such as BiLSTM and BERT for the Marathi language to predict 3-class sentiments of marathi sentences (Positive, Neutral and Negative).',
    link: '/blog1',
    logos: [],
    logolinks: []
  },
  {
    image: ProjectBlockchainImg,
    title: 'Peti-Chain - Blockchain based petition filing system',
    blogtype: 'Blockchain network and Website',
    description: 'Created a Smart-Contracts based blockchain application for Judicial Petition-filing, on Ethereum Network',
    link: '/blog1',
    logos: [
      PPT,
      YouTubeLogo
    ],
    logolinks: [
      PPTPetiChain,
      "https://youtu.be/dES7PGgBuUQ"
    ]
  },
  {
    image: ProjectGaleShapelyImg,
    title: 'Multi-Staged Gale-Shapely : Guide & Group Matching Problem',
    blogtype: 'Theoretical CS',
    description: 'Proposal & Implementation of Multi-Staged Gale & Shapely algorithm for guide and group matching. Both side preferences used and a Complete & Stable Matching is obtained after several stages.',
    link: '/blog1',
    logos: [
      PPT,
    ],
    logolinks: [
      PPTGaleShapely,
    ]
  },
  {
    image: ProjectAssemblyImg,
    title: 'KNN algorithm in Assembly Language (x86-64)',
    blogtype: 'x86-64',
    description: 'Written KNN Algorithm in x86-64 Assembly Language with Manhattan Distance on Variable sized dataset for classification purpose. Includes reading and parsing a CSV file of dynamic size and write-back in CSV. Tested for an Income Prediction task for 2-class classification.',
    link: '/blog1',
    logos: [
      PPT,
    ],
    logolinks: [
      PPTAssembly,
    ]
  },
  {
    image: ProjectDigitalTwinImg,
    title: 'Windmill Digital Twin using OpenGL in C',
    blogtype: 'C, OpenGL',
    description: 'Built an OpenGL Scene using in C from scratch. Applied concepts like Camera Models, Lighting, Transformations, Geometrical Models and variable Frame-rate. Used various data-structures and algorithms for optimal results.',
    link: '/blog1',
    logos: [
      PPT,
    ],
    logolinks: [
      PPTDigitalTwin,
    ]
  },
  {
    image: ProjectMarathiGANImg,
    title: 'Comprehensive Devanagari Digits Dataset',
    blogtype: 'ML Model, Android Application',
    description: 'Created GAN and CGAN models for generating synthetic large-scale datasets of Devanagari Digits. Also created an Android application for collecting the initial input images. Won <span className="gradient-yellow-text">First Prize</span> in <a href="https://web.archive.org/web/20241221111324/https://pictinc.org/static/media/Impetus_Winners.73299dd43bda229b3a62.pdf" className="cool-link" target="_blank" rel="noopener noreferrer">Impetus</a> 2024 in ML domain',
    link: '/blog1',
    logos: [
      PPT,
    ],
    logolinks: [
      PPTMarathiGAN,
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