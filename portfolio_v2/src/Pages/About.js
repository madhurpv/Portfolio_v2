
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import './Styling/About.css';

class About extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="About Me" />
        {/*<p>This is About</p>*/}
        < br/>

        <div className="rounded-rectangle-about"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignContent:"center", minHeight: "60vh"
          }}
        >
          <div className="content">
            {/* Add any content inside this box */}
            <p className="noto-sans-300-about" style={{fontSize: "120%"}}>My name is <b>Madhur Vaidya</b></p><br/>
            <p className="noto-sans-300-about" style={{fontSize: "120%"}}>I am a student at the Vishwakarma Institute of Technology, Pune, learning Computer Engineering</p><br/>
            <p className="noto-sans-300-about" style={{fontSize: "120%"}}>I love to learn new things</p><br/>
            <p className="noto-sans-300-about" style={{fontSize: "120%"}}>I am interested in <i>Theoretical Computer Science</i> and <i>Machine Learning</i></p><br/>
            <p className="noto-sans-300-about" style={{fontSize: "120%"}}>I am passionate about <a href="/portfolio/#/hobbies" className='cool-link2'>birds and photography</a> too!</p><br/>
            <p className="noto-sans-300-about" style={{fontSize: "120%"}}>You can look at my Resume <a href="/portfolio/#/resume" className='cool-link'>here</a></p><br/>
            <p className="noto-sans-300-about" style={{fontSize: "120%"}}>I have two YouTube channels - one where I post about <a href="https://www.youtube.com/channel/UCU9aSHMLw9ERNOgGfzfq7Vg" className='cool-link2'>technical stuff</a> and the other one where I post about <a href="https://www.youtube.com/channel/UCBmj7VB-QyXFWgxDFpvdcXw" className='cool-link2'>birds and nature</a>.</p><br/>
          </div>
        </div>

      </div>
    );
  }
}

export default About;