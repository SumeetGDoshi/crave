import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";

import FooterLogo from "../assets/DesktopWebsite/footer_logo.png";

export class DesktopFooter extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="desktop-footer">
        <div className="logoHolder">
          <img src={FooterLogo} />
        </div>
        <div className="footer-navigationLinksContainer">
          <div className="menu-list-container navigationLinkList">
            <div className="menu-list navigationLink what-we-do" onClick={() => {
                  scrollToComponent(this.props.sections.whatWeDo, {
                    offset: -100,
                    align: "top",
                    duration: 1500
                  });
                }}>
              <span className="vertical-align-text">
                What do
                <br /> we do?
              </span>
            </div>
            <div className="menu-list navigationLink how-we-do-it" onClick={() => {
                  console.log(this.props.sections.howMuchCost);
                  scrollToComponent(this.props.sections.howWeDoIt, {
                    offset: -100,
                    align: "top",
                    duration: 1500
                  });
                }}>
              <span className="vertical-align-text">
                How do
                <br /> we do it?
              </span>
            </div>
            <div className="menu-list navigationLink how-much-would-it-cost" onClick={() => {
                  console.log(this.props.sections.howMuchCost);
                  scrollToComponent(this.props.sections.howMuchCost, {
                    offset: -100,
                    align: "top",
                    duration: 1500
                  });
                }}>
              <span className="vertical-align-text">
                How much
                <br /> does it cost?
              </span>
            </div>
            <div className="menu-list navigationLink who-do-we-work-with" onClick={() => {
                  console.log(this.props.sections.howMuchCost);
                  scrollToComponent(this.props.sections.whoWeWorkWith, {
                    offset: -100,
                    align: "top",
                    duration: 1500
                  });
                }}>
              <span className="vertical-align-text">
                Who do we
                <br /> work with?
              </span>
            </div>
            <div className="menu-list navigationLink how-can-you-reach-us" onClick={() => {
                  console.log(this.props.sections.howMuchCost);
                  scrollToComponent(this.props.sections.howToReach, {
                    offset: -100,
                    align: "top",
                    duration: 1500
                  });
                }}>
              <span className="vertical-align-text">
                How can you
                <br /> reach us?
              </span>
            </div>
            <div className="menu-list navigationLink want-to-refer-someone-to-us" >
              <a href="/careers" style={ { color:'#fff' } }>
              <span className="vertical-align-text">
                Work with
                <br /> us?
              </span></a>
            </div>
            <div className="menu-list navigationLink want-to-refer-someone-to-us" >
              <a href="/blog" style={ { color:'#fff' } }>
              <span className="vertical-align-text">
                Blog
              </span></a>
            </div>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/at-socialmedia/about"><i className="social-icon fab fa-2x fa-linkedin" /></a>
          {/* <i className="social-icon fab fa-facebook-f" /> */}
          <a href="https://www.instagram.com/atsocial/"><i className="social-icon fab fa-2x fa-instagram" /></a>
        </div>
        <div className="rights">@ 2019 AT SOCIAL RIGHTS RESERVED</div>
      </div>
    );
  }
}

export default DesktopFooter;
