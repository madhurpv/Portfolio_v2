
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import "../Pages/Styling/Page404.css"

import img_404 from "../components/assets/404_Img_2.png"


class Page404 extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="Page not found!" />

        <br /><br /><br />

        <div className="rounded-rectangle-404"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignContent:"center", minHeight: "30vh", wordBreak: "break-all"
          }}
        >
          <div className="content">
            {/* Add any content inside this box */}
            <p className="noto-sans-300-about" style={{fontSize: "120%"}}>You flew to the wrong page! Click <a href="/portfolio/#/" className='cool-link'>here</a> to go back home.</p><br/>
            <img className='image-404' src={img_404} />
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;