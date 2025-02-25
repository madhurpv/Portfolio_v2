
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
import ProjectSimpleVideoEditorImg from "../components/assets/Projects/Images/ProjectSimpleVideoEditor.png"
import ProjectFederatedLearning from "../components/assets/Projects/Images/ProjectFederatedLearning.png"
import ProjectCompilerR from "../components/assets/Projects/Images/ProjectCompilerR.png"


import PPTFAST from "../components/assets/Projects/Docs/PPTFAST.pdf"
import PPTPetiChain from "../components/assets/Projects/Docs/PPTPetiChain.pdf"
import PPTGaleShapely from "../components/assets/Projects/Docs/PPTGaleShapely.pdf"
import PPTAssembly from "../components/assets/Projects/Docs/PPTAssembly.pdf"
import PPTDigitalTwin from "../components/assets/Projects/Docs/PPTDigitalTwin.pdf"
import PPTMarathiGAN from "../components/assets/Projects/Docs/PPTMarathiGAN.pdf"
import PPTFederatedLearning from "../components/assets/Projects/Docs/PPTFederatedLearning.pdf"
import PPTCompilerR from "../components/assets/Projects/Docs/PPTCompilerR.pdf"


const cardsData = [
  {
    image: ProjectMarathiGANImg,
    title: 'Comprehensive Devanagari Digits Dataset',
    blogtype: 'ML Model, Android Application',
    description: 'Created GAN and CGAN models for generating synthetic large-scale datasets of Devanagari Digits. Also created an Android application for collecting the initial input images. Won <span className="gradient-yellow-text"><b>First Prize</b></span> in <a href="https://web.archive.org/web/20241221111324/https://pictinc.org/static/media/Impetus_Winners.73299dd43bda229b3a62.pdf" className="cool-link" target="_blank" rel="noopener noreferrer">Impetus</a> 2024 in ML domain',
    link: '/blog1',
    logos: [
      PPT,
    ],
    logolinks: [
      PPTMarathiGAN,
    ]
  },
  {
    image: ProjectFASTImg,
    title: 'FAST - FAST Attendance System Technology',
    blogtype: 'Android Application (Java), Windows Application (Python)',
    description: 'Created a proxy-proof attendance-taking system for colleges and professional conferences and seminars, based on the technology of Dynamic QR Codes. Won <span className="gradient-yellow-text"><b>Second Prize</b></span> in <a href="https://pictinc.org/" className="cool-link" target="_blank" rel="noopener noreferrer">Impetus</a> 2023 in Applications domain',
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
    image: ProjectSimpleVideoEditorImg,
    title: 'Quick Video Editor',
    blogtype: 'Windows Application (Python)',
    description: 'A simple video editor in Python for fast editing of videos, along with scaling, trimming, cropping, applying filters like brightness and contrast and also applying a watermark over the video.',
    link: '/blog1',
    logos: [
      YouTubeLogo,
      GithubLogo
    ],
    logolinks: [
      "https://youtu.be/ZCvuZgZxnwco",
      "https://github.com/madhurpv/Quick_Video_Editor"
    ]
  },
  {
    image: ProjectFederatedLearning,
    title: ' Demonstration and Implementation of Federated Learning',
    blogtype: 'Deep Learning',
    description: 'Simulated and Implemented Federated Learning on an Eye Glaucoma image dataset. Used three methods for aggregation -  Simple Average, Weighted Average and Drift + Penalty Method.',
    link: '/blog1',
    logos: [
      PPT
    ],
    logolinks: [
      PPTFederatedLearning
    ]
  },
  {
    image: ProjectMarathiSentimentImg,
    title: 'Sentiment Analysis of Marathi Texts using Deep Learning',
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
    description: 'A Smart-Contracts based blockchain application for Judicial Petition-filing, on Ethereum Network',
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
    image: ProjectCompilerR,
    title: 'Compiler for Subset of R langauge',
    blogtype: 'Compiler Design - FLEX, Bison, C',
    description: 'A partial compiler for a subset of the R language. Implemented the phases of Lexical, Syntax and Semantic Analysis',
    link: '/blog1',
    logos: [
      PPT,
      GithubLogo
    ],
    logolinks: [
      PPTCompilerR,
      "https://github.com/Sarthak9504/Simple-R-Compiler"
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
      GithubLogo
    ],
    logolinks: [
      PPTAssembly,
      "https://github.com/Sarthak9504/KNN_implementation_in_x86-64"
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
      YouTubeLogo
    ],
    logolinks: [
      PPTDigitalTwin,
      "https://www.youtube.com/watch?v=geABRkp38ug"
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
        <Title title="Projects" />
        <br />
        <p className="noto-sans-300">These are projects</p>
        <CardContainerProjects cards={cardsData} />
      </div>
    );
  }
}

export default Projects;