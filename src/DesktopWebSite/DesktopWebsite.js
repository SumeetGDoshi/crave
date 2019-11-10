import React, { Component } from "react";
import Modal from "react-modal";

import "../assets/fonts/fonts.css";
import "./DesktopWebsite.css";

import DesktopHeader from "./DesktopHeader";
import WhatWeDo from "./WhatWeDo";
import HowWeDoIt from "./HowWeDoIt";
import HowMuchCost from "./HowMuchCost";
import WhoWeWorkWith from "./WhoWeWorkWith";
import HowToReach from "./HowToReach";
import Refer from "./Refer";
import DesktopFooter from "./DesktopFooter";
import QualityMeets from "./QualityMeets";
import ClientInfo from "./ClientInfo";
import PressDesktop from "./PressDesktop";
import Testimonials from "./Testimonials";


const customStyles = {
  content: {
    top: "20%",
    bottom: "20%",
    left: "17vw",
    right: "16%",
    padding: "1vw",
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    height: "91vh",
    border: "3px solid #000",
    "border-radius": "3vw",
    "max-width": "80vw",
    margin: "auto"
  }
};
export class DesktopWebsite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      client: "moms",
      sections: {}
    };
    this.sections = {};
    this.appElementRef = {};
    this.openModal = this.openModal.bind(this);
    this.client = "";
  }
  componentDidMount() {}
  render() {
    return (
      <div className={"desktop-container"  + (this.state.isModalOpen ? " modal-open" : "") }ref={(ref) => {this.appElementRef = ref}}>
        <DesktopHeader sections={this.sections} />
        <div className="scrollable-page-content">
          <div
            className="section-container"
            ref={WhatWeDo => {
              this.sections.whatWeDo = WhatWeDo;
            }}
          >
            <WhatWeDo />
          </div>
          <div
            className="section-container"
          >
            <PressDesktop />
          </div>
          <div
            className="section-container"
            ref={HowWeDoIt => {
              this.sections.howWeDoIt = HowWeDoIt;
            }}
          >
            <HowWeDoIt />
          </div>
          <div
            className="section-container"
            ref={HowMuchCost => {
              this.sections.howMuchCost = HowMuchCost;
            }}
          >
            <HowMuchCost />
          </div>
          <div
            className="section-container"
            ref={QualityMeets => {
              this.sections.qualityMeets = QualityMeets;
            }}
          >
            <QualityMeets />
          </div>
          <div
            className="section-container"
            ref={WhoWeWorkWith => {
              this.sections.whoWeWorkWith = WhoWeWorkWith;
            }}
          >
            <WhoWeWorkWith openModal={this.openModal.bind(this)} />
          </div>
          {/* <div
            className="section-container"
            ref={Testimonials => {
              this.sections.testimonals = Testimonials;
            }}
          >
            <Testimonials />
          </div> */}
          <div
            className="section-container"
            ref={HowToReach => {
              this.sections.howToReach = HowToReach;
            }}
          >
            <HowToReach />
          </div>
          <div
            className="section-container"
            ref={Refer => {
              this.sections.refer = Refer;
            }}
          >
            <Refer />
          </div>
        </div>
        <DesktopFooter sections={this.sections}/>
        <Modal
          isOpen={this.state.isModalOpen}
          onAfterOpen={this.openModal.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          className="ModelClient"
          ariaHideApp={false}
        >
          
          <ClientInfo client={this.state.client} openModal={ this.openModal }/>
          
        </Modal>
      </div>
    );
  }
  openModal(client) {
    this.setState({ isModalOpen: true, client: client });
    this.client = client;
  }
  closeModal() {
    this.setState({ isModalOpen: false });
  }

  onarrowClick(position, lastindex){
    console.log(position, lastindex)
  }
}

export default DesktopWebsite;
