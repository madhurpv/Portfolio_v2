
import React, {Component} from 'react';
import Title from '../../components/Title';
import "../../Pages/Styling/About.css"

import Blog3Img from "../../components/assets/Blogs/Images/Blog3.jpg"

class Blog3 extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="Hobby of Hobby!" />
        <br />
        <br />
        <div className="content">
          <p className="noto-sans-300">The Eurasian Hobby is a migratory falcon which migrates from the himalayan region to Africa, passing over India in The South Asian region. But it is hardly seen in India for extended periods as most of the individuals pass over India in a matter of a few days!</p>
          
          <br />
          <div style={{width: "100%", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
            <img style={{border: "3px solid #DDDDDD", maxWidth: "500px"}} src={Blog3Img} />
            <p style={{color: "#AAAAAA"}}>© Madhur Vaidya</p>
          </div>
          <br />

          <p className="noto-sans-300">But an individual gave a tremendous surprize this year - by staying at the heart of Pune!</p>
          <br />
          <p className="noto-sans-300">The individual was spotted on Vetal Tekdi's grasslands in the winter of 2025-2026. As birders flocked to catch a glimpse of it, it continued to surprize for days as it remained in the same area, giving wonderful poses to birders and photographers alike. All the prayers 'please stay just one more day!' of the birders were answered by the Hobby, as it continued to stay there for weeks after weeks.</p>
          <p className="noto-sans-300">Even after facing tough competition from the residents here - especially the Black Winged Kites, which were recorded to be harassing and mobbing the Hobby - the Hobby continued to live here every day!</p>
          <br />
          <p className="noto-sans-300">How to identify a Eurasian Hobby? We all know that it is a falcon, but the bird can look quite similar to other falcons found in the Indian subcontinent - especially the Shaheen and Calidus subspecies of the Peregrine Falcon.</p>
          <br />

          <div style={{width: "100%", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "row"}}>
            <iframe src="https://macaulaylibrary.org/asset/646437478/embed" height="460" width="340" frameborder="3" allowfullscreen style={{background: "#DDDDDD", padding: "3px", margin: "10px"}}></iframe>
            <iframe src="https://macaulaylibrary.org/asset/566391731/embed" height="460" width="340" frameborder="3" allowfullscreen style={{background: "#DDDDDD", padding: "3px", margin: "10px"}}></iframe>
          </div>
        
          <br />
          <p className="noto-sans-500">How to differentiate the hobby from Calidus and Shaheen falcons?</p>
          <p className="noto-sans-300">The birds seem very similar at first, but there are a few differences. The Hobby shows a streaked body, while the Shaheen's body is non-dtreaked with a brownish-orangish colour. The pattern on the head is also different. While the Calidus does show a streaked body, the streakings are finer than that of the Hobby. The Calidus is larger in size too than the Hobby. Also, the Hobby shows a white 'eyebrow' which both the Shaheen and the Calidus lack.</p>
          <p className="noto-sans-300">In flight, the hobby shows pointier wings and is much more agine than either of the two birds.</p>

          <br />

          <p className="noto-sans-300">Let us hope that the Hobby likes this place so much, that it continues to live on here and also come back in the years to come!</p>

          <br />
        </div>
      </div>
    );
  }
}

export default Blog3;