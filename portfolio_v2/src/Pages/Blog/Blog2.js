
import React, {Component} from 'react';
import Title from '../../components/Title';
import "../../Pages/Styling/About.css"

class Blog2 extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="Calculate how far that raptor is!" />
        <br />
        <br />
        <div className="content">
          <p className="noto-sans-300">Have an idea how far that raptor is soaring? Want to calculate it by using just a single photo? Well, you can do it now by using <a href="https://madhurpv.github.io/raptor-height/" className='cool-link2'>'Bird Altitude Estimator'</a>!</p>
          <br />
          <p className="noto-sans-300">The following video explains how to use the Bird Altitude Estimator to calculate the height of a flying raptor - </p>
          <br />
          <div style={{width: "100%", alignItems: "center", justifyContent: "center", display: "flex"}}>
            <iframe width = "50%" height = "400px" 
              src="https://www.youtube.com/embed/XE0aDJy1uUc">
            </iframe>
          </div>
          <br />
          <br />
          <p className="noto-sans-500">Simple steps to follow - </p>
          <p className="noto-sans-300" style={{marginLeft: "40px"}}>
            <ol>
              <li>Click on the 'Upload photo' button and select your image.</li>
              <li>Select the bird species present in the photo from the dropdown menu.</li>
              <li>Mark the bird's wingspan by clicking twice on the image - once at the start point and once at the end point.</li>
              <li>If the '35mm equivalent focal length' is not automatically filled in, set it to the 35mm equivalent focal length of your camera lens when the photo was taken.</li>
              <li>'Distance' displays the calculated distance of the bird from the camera, while 'Estimated uncertainity' indicates how much the actual distance may vary.</li>
            </ol>
          </p>

          < br />

          <p className="noto-sans-500">Well - you may ask - how does this work?</p>
          <p className="noto-sans-300">This maths behind this is based on simple trignometric calculations! We know the approximate width (wingspan) of the bird and the angle subtended by the bird on the camera. Using these two things, we can calculate the value of the third variable - the distance (height) of the triangle formed between the two wing-tips of the bird and the camera! The video above goes over this in detail using pictorial examples.</p>

          <br />

          <p className="noto-sans-300">If you find any errors, orhave any feedback/suggestions, please feel free to contact me through <a href="https://docs.google.com/forms/d/e/1FAIpQLSebqvj4onLsT5J75vfA8aqOJvf9EmdOcX0XUWZkMnk6zczA8A/viewform?usp=dialog" className='cool-link2'>this google form</a>!</p>
          <p className="noto-sans-300">If you want to contribute towards the development of the project, head over to  <a href="https://github.com/madhurpv/raptor-height/tree/master" className='cool-link2'>the GitHub page</a>.</p>

          <br />
        </div>
      </div>
    );
  }
}

export default Blog2;