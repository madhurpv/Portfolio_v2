
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';

class Contact extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="Contact" />

        <br /><br /><br />

        <div className="rounded-rectangle-about"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignContent:"center", minHeight: "30vh", wordBreak: "break-all"
          }}
        >
          <div className="content">
            {/* Add any content inside this box */}
            <p className="noto-sans-300-about" style={{fontSize: "120%"}}>You can contact me at my email address:<br /><i><b><u>madhur.vaidya_221_&lt;at&gt;_vit.edu</u></b></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(remove underscores)</p><br/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;