
import React, {Component} from 'react';
import Title from '../../components/Title';
import "../../Pages/Styling/About.css"

import Blog5Img from "../../components/assets/Blogs/Images/Blog5.jpg"
import Blog5Img_1 from "../../components/assets/Blogs/Images/Blog5_1.jpg"
import Blog5Img_2 from "../../components/assets/Blogs/Images/Blog5_2.jpg"

class Blog5 extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="Common Myna or Jungle Myna?" />
        <br />
        <br />
        <div className="content">
          <p className="noto-sans-300">The mynas are medium-sized birds found throughout India. They are quite common in forests, but even more common near our homes in cities too! They are known for both their wonderful vocalizations and yet for their nuisiance too!</p>
          <br />
          <br />
          <p className="noto-sans-500">The commonly found Mynas</p>
          <br />
          <p className="noto-sans-300">There are 2 types of Mynas that are commonly found nearly throughout India - the Common Myna and the Jungle Myna. As the name suggests, the Common Myna is much more common in cities and urban areas, though both are quite common birds.</p>
          <br />

          <div style={{width: "100%", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
            <img style={{border: "3px solid #DDDDDD", maxWidth: "800px"}} src={Blog5Img_1} />
            <p style={{color: "#AAAAAA", fontSize: "100%"}}>Jungle Myna and Common Myna</p>
            <p style={{color: "#AAAAAA", fontSize: "90%"}}>© Madhur Vaidya</p>
          </div>

          <br />
          <p className="noto-sans-500">Now let us see how to differentiate them.</p>
          <br />

          <div style={{width: "100%", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
            <img style={{border: "3px solid #DDDDDD", maxWidth: "800px"}} src={Blog5Img_2} />
            <p style={{color: "#AAAAAA", fontSize: "100%"}}>Jungle Myna vs Common Myna</p>
            <p style={{color: "#AAAAAA", fontSize: "90%"}}>© Madhur Vaidya</p>
          </div>

          <br />

          <p className="noto-sans-300">Here are 3 easy points which you can use to differentiate between them - </p>
          <br />
          <p className="noto-sans-300"><ol>
              <li>Eyes/Iris - <b>Jungle Myna</b> - Plain coloured (either yellow or blue), <b>Common Myna</b> - Plain coloured with white spots</li>
              <li>Eyes/Iris - <b>Jungle Myna</b> - No skin patch, <b>Common Myna</b> - Yellow coloured skin patch behind eye</li>
              <li>Eyes/Iris - <b>Jungle Myna</b> - Crest, <b>Common Myna</b> - No crest</li>
            </ol></p>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Blog5;