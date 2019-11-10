import React, { Component } from "react";

import QualityMeetsBg from  "../assets/DesktopWebsite/quality_meets.png";

export class QualityMeets extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="quality-meets section-container">
        <div className="quality-meets-bg">
          <img src={QualityMeetsBg}></img>
        </div>
      </div>
    );
  }
}

export default QualityMeets;