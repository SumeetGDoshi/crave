import React, { Component } from "react";
import "./Form.css";

import leftIcon1 from "./assets/form/US_Business_Icon.png";
import leftIcon2 from "./assets/form/Indian_Business_Icon.png";
import leftIcon3 from "./assets/form/Applicants_Icon.png";
import leftIcon4 from "./assets/form/Influencer_Icon.png";
import leftIcon5 from "./assets/form/trial-icon.png";
import leftIcon6 from "./assets/form/trial-text.png";

const colorArray = ["#EF4749", "#58C2B1", "#FBC112", "#512B77", "#EF4749"];
const iconsArray = [leftIcon1, leftIcon2, leftIcon3, leftIcon4, leftIcon5];
const popupTexts = [
  "Please expect a call from us within 24 hours from an Indian (+91) number.",
  "Please expect a call from us within 24 hours.",
  undefined,
  undefined,
  undefined
];
const contact_type_araay = [
  "US business",
  "Indian Business",
  "Applicants",
  "Influencer",
  "Free Trail"
];

class Form extends Component {
  handleSubmit(event) {
    event.preventDefault();
    let self = this;
    var xhr = new XMLHttpRequest();
    let urlEncodedData = "";
    let urlEncodedDataPairs = [];
    xhr.open("POST", "https://app.99inbound.com/api/e/3gnOgCXD", true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
      // Call a function when the state changes.
      if (
        this.readyState === XMLHttpRequest.DONE &&
        (this.status === 200 || this.status === 0)
      ) {
        // Request finished. Do processing here.
        // reports google ads conversion
        contact_type_araay[self.props.type] == "Free Trail" && self.gtag_report_conversion(() => {console.log("gtag reporting successful")});
        self.props.close();
        if (typeof popupTexts[self.props.type] != "undefined") {
          self.props.changeModalClass("open");
          self.props.changeModalTexts("", popupTexts[self.props.type]);
        }
      }
    };
    let submit_object = {
      contactType: contact_type_araay[this.props.type],
      business_name: this.state.business_name,
      business_website: this.state.business_website,
      name: this.state.name,
      email: this.state.email,
      number: this.state.contact,
      message: this.state.time_to_call,
      message: this.state.message,
      submit: "Submit"
    };
    for (let key in submit_object) {
      urlEncodedDataPairs.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(submit_object[key])
      );
    }
    urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

    xhr.send(urlEncodedData);

    // the following code is to test the onSubmit behaviour without actually submitting the form
    // this.props.close();
    // if (typeof popupTexts[this.props.type] != "undefined") {
    //   this.props.changeModalClass("open");
    //   this.props.changeModalTexts("Thank you for your interest!", popupTexts[this.props.type]);
    // }
    // test code end
  }
  state = {
    name: "",
    email: this.props.email,
    contact: ""
  };
  render() {
    const color = colorArray[this.props.type];
    let image;
    if (this.props.type != 4) {
      image = (
        <img src={iconsArray[this.props.type]} alt="img" className="left-img" />
      );
    } else {
      image = (
        <div>
          {" "}
          <img src={leftIcon5} alt="img" className="left-img left-image-top" />
          <img
            src={leftIcon6}
            alt="img"
            className="left-img left-image-bottom"
          />
        </div>
      );
    }
    return (
      <div className="form-div">
        {/* Left side of form */}
        <div className="left-side" style={{ backgroundColor: `${color}` }}>
          {image}
        </div>
        {/* Right side of form */}
        <div className="right-side">
          <form onSubmit={this.handleSubmit.bind(this)} method="POST">
            <input
              name="contactType"
              value={contact_type_araay[this.props.type]}
              type="hidden"
            />

            {(this.props.type == 0 || this.props.type == 4) && (
              <div className="input-div">
                <span>Business Name</span>
                <input
                  type="text"
                  name="business_name"
                  className="form-input "
                  onChange={e =>
                    this.setState({ business_name: e.target.value })
                  }
                  value={this.state.business_name}
                />
              </div>
            )}

            {(this.props.type == 0 || this.props.type == 4) && (
              <div className="input-div">
                <span>Business Website</span>
                <input
                  type="text"
                  name="business_website"
                  className="form-input "
                  onChange={e =>
                    this.setState({ business_website: e.target.value })
                  }
                  value={this.state.business_website}
                />
              </div>
            )}

            <div className="input-div">
              Name
              <input
                type="text"
                name="name"
                className="form-input"
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
              />
            </div>
            <div className="input-div">
              Email ID
              <input
                type="email"
                name="email"
                className="form-input"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="input-div">
              <span>
                Contact No
                {"  "}
                {this.props.type === 0 && "+1-"}
                {this.props.type === 1 && "+91-"}
                {this.props.type === 2 && "+91-"}
              </span>
              <input
                type="number"
                name="number"
                className="form-input "
                onChange={e => this.setState({ contact: e.target.value })}
                value={this.state.contact}
                min="1000000000"
                max="9999999999"
              />
            </div>
            {(this.props.type == 0 || this.props.type == 4) && (
              <div className="input-div">
                <span>Best Time to Call</span>
                <input
                  type="text"
                  name="message"
                  className="form-input "
                  onChange={e =>
                    this.setState({ time_to_call: e.target.value })
                  }
                  value={this.state.time_to_call}
                />
              </div>
            )}

            <div className="input-div">
              <span>Leave Us a Message</span>
              <input
                type="text"
                name="message"
                className="form-input "
                onChange={e => this.setState({ message: e.target.value })}
                value={this.state.message}
              />
            </div>

            <input
              className="submit-form-btn"
              type="submit"
              name="submit"
              style={{ backgroundColor: `${color}` }}
            />
          </form>
        </div>
      </div>
    );
  }

  gtag_report_conversion(callback) {
    window.gtag('event', 'conversion', {
        'send_to': 'AW-789531219/adlJCLGNy5MBENOUvfgC',
        'event_callback': callback
    });
    return false;
  }
}

export default Form;
