import React, { Component } from "react";

import Accordion from "./Accordion";
import HaveUsReachForm from "./HaveUsReachYouForm";

import LeftArtWork from "../assets/DesktopWebsite/SVG/reach_us_left.svg";
import RightArtWork from "../assets/DesktopWebsite/SVG/reach_us_right.svg";

export class HowToReach extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="how-to-reach section-container">
        <div className="section-heading">HOW CAN YOU REACH US?</div>
        <div className="accordion-continaers">
          <div className="left-artwork">
            <img src={LeftArtWork} />
          </div>
          <div className="right-artwork">
            <img src={RightArtWork} />
          </div>
          <div className="accordion-container call-us">
            <Accordion
              subComponent={
                <div className="contacts">
                  <div className="contactNumber"><span>Email:</span> <a style={{textDecorationLine:'none', color: '#000'}} target="_top" href="mailto:info@at.social">info@at.social </a> </div><br />
                  <div className="contactNumber"><span>Office Address:</span> <a style={{textDecorationLine:'none', color: '#000'}}  target="_blank" href="https://www.google.com/maps/place/Satya+House/@18.9965768,72.8459306,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7cefc2b4d8fa9:0x59b3f307ac06ef6!8m2!3d18.9965768!4d72.8481193">  5th floor, Satya House, Ram Tekari Road, Sewri, Mumbai - 400015 </a> </div> <br />
                  <div className="contactNumber">INDIA: +91 8097900119</div>
                  <div className="contactNumber">USA: +1 3158192292</div>
                  <div style={{marginLeft: 0, marginTop: 15 }}>
                    <a style={{textDecorationLine:'none', color: '#000', marginRight: 10}} target="_blank" href="https://www.linkedin.com/company/at-socialmedia/about"><i className="fab fa-2x fa-linkedin" /></a>
                    {/* <i className="social-icon fab fa-facebook-f" /> */}
                    <a style={{textDecorationLine:'none', color: '#000', margin: 10}} target="_blank" href="https://www.instagram.com/atsocial/"><i className="fab fa-2x fa-instagram" /></a>
                  </div>
                </div>
              }
              title="Contact Us"
            />
          </div>
          <div className="accordion-container have-us-reach">
            <Accordion
              subComponent={<HaveUsReachForm />}
              title="Have us reach you"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HowToReach;
