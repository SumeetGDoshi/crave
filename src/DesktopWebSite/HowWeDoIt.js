import React, { Component } from "react";

import HowWeDoItBg from "../assets/DesktopWebsite/how_we_do_it_bg.png";
import HowWeDoItArtWork from "../assets/DesktopWebsite/how_we_do_it_artwork.png";
export class HowWeDoIt extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="how-we-do-it section-container">
        <div className="how-we-do-it-bg">
          <img src={HowWeDoItBg}></img>
        </div>
        <div className="section-heading">
          HOW DO WE DO IT?
        </div>
        <div className="how-we-do-it-main-artwork">
          <img src={HowWeDoItArtWork}></img>
        </div>
      </div>
    );
  }
}

export default HowWeDoIt;