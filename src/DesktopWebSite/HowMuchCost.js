import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';


import ReactFlagsSelect from 'react-flags-select';
 
//import css module
import './FlagsSelect.css';

import ReactCardFlip from "react-card-flip";


const styles = theme => ({
  locationHelperText:{
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    paddingBottom: '6vw',
    fontSize: '34px'
  },

});


export class HowMuchCost extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped1: false,
      isFlipped2: false,
      isFlipped3: false,
      isFlipped4: false,
      country: "US"
    };
    this.onSelectCountry = this.onSelectCountry.bind(this);
  }
  componentDidMount() {}

  onSelectCountry(countryCode){
    this.setState({ country: countryCode });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="how-much-cost section-container">
        <div className="section-heading">WHAT DOES IT COST?
        </div>
        <div className={classes.locationHelperText}>
          <span>Are you in</span> 
          <ReactFlagsSelect
          countries={["US","IN"]}
          placeholder="Pick Location" 
          selectedSize={30}
          optionsSize={30}
          defaultCountry="US"
          onSelect={this.onSelectCountry}/> ?
        </div>
         
        <div
          className="cost-pills-container"
          onMouseLeave={() =>
            this.setState({
              isFlipped1: false,
              isFlipped2: false,
              isFlipped3: false,
              isFlipped4: false
            })
          }
        >
          <ReactCardFlip
            isFlipped={this.state.isFlipped1}
            flipSpeedBackToFront="0.3"
            flipSpeedFrontToBack="0.3"
          >
            <div
              key="front"
              onMouseEnter={() =>
                this.setState({
                  isFlipped1: true,
                  isFlipped2: false,
                  isFlipped3: false,
                  isFlipped4: false
                })
              }
              onMouseLeave={() =>
                this.isFlipped1 ? this.setState({ isFlipped1: false }) : 3
              }
            >
              <div className="cost-vertical-pill cute">
                <div className="cost-pill-knob">cute</div>
                <div className="cost-pill-cost">
                  { this.state.country && <article><span>{this.state.country == "US" ? "$350" : "₹25,000"}</span> <br /> per month.</article>}
                  { !this.state.country && <article>Pick Location</article> }
                </div>
              </div>
            </div>
            <div
              key="back"
              onMouseEnter={() =>
                this.setState({
                  isFlipped1: true,
                  isFlipped2: false,
                  isFlipped3: false,
                  isFlipped4: false
                })
              }
              onMouseLeave={() => this.setState({ isFlipped1: false })}
            >
              <div className="cost-vertical-pill cost-vertical-pill-back cute">
                <div className="cost-pill-cost">
                  15 Posts on Instagram / Facebook (no graphic design)
                  <br />
                  <br />
                  Surveillance.
                  <br />
                  <br />
                  Analytics
                </div>
              </div>
            </div>
          </ReactCardFlip>

          <ReactCardFlip
            isFlipped={this.state.isFlipped2}
            flipSpeedBackToFront="0.3"
            flipSpeedFrontToBack="0.3"
          >
            <div
              key="front"
              onMouseEnter={() =>
                this.setState({
                  isFlipped1: false,
                  isFlipped2: true,
                  isFlipped3: false,
                  isFlipped4: false
                })
              }
              onMouseLeave={() =>
                this.isFlipped2 ? this.setState({ isFlipped2: false }) : 3
              }
            >
              <div className="cost-vertical-pill hustle">
                <div className="cost-pill-knob">hustle</div>
                <div className="cost-pill-cost">
                { this.state.country && <article><span>{this.state.country == "US" ? "$600" : "₹42,000"}</span> <br /> per month.</article>}
                  { !this.state.country && <article>Pick Location</article> }
                </div>
              </div>
            </div>
            <div
              key="back"
              onMouseEnter={() =>
                this.setState({
                  isFlipped1: false,
                  isFlipped2: true,
                  isFlipped3: false,
                  isFlipped4: false
                })
              }
              onMouseLeave={() => this.setState({ isFlipped2: false })}
            >
              <div className="cost-vertical-pill cost-vertical-pill-back hustle">
                <div className="cost-pill-cost">
                  {/* 15 Posts on Instagram / Facebook */}
                  {'15 posts & 15 stories on Instagram & Facebook'}
                  <br />
                  <br />
                  {/* 1 Two-hour Photography / Videography Session */}
                  2 hours of Photography or Graphic design
                  <br />
                  <br />
                  {/* Surveillance */}
                  Ad Management (5 creatives) or Influencer Marketing (2 influencer posts)
                  <br />
                  <br />
                  {/* Analytics */}
                  Surveillance
                  <br />
                  <br />
                  {/* Ad Management or Influencer Marketing */}
                  Analytics
                </div>
              </div>
            </div>
          </ReactCardFlip>

          <ReactCardFlip
            isFlipped={this.state.isFlipped3}
            flipSpeedBackToFront="0.3"
            flipSpeedFrontToBack="0.3"
          >
            <div
              key="front"
              onMouseEnter={() =>
                this.setState({
                  isFlipped1: false,
                  isFlipped2: false,
                  isFlipped3: true,
                  isFlipped4: false
                })
              }
              onMouseLeave={() =>
                this.isFlipped3 ? this.setState({ isFlipped3: false }) : 3
              }
            >
              <div className="cost-vertical-pill disruptor">
                <div className="cost-pill-knob">disrupt</div>
                <div className="cost-pill-cost">
                { this.state.country && <article><span>{this.state.country == "US" ? "$900" : "₹60,000"}</span> <br /> per month.</article>}
                  { !this.state.country && <article>Pick Location</article> }
                </div>
              </div>
            </div>
            <div
              key="back"
              onMouseEnter={() =>
                this.setState({
                  isFlipped1: false,
                  isFlipped2: false,
                  isFlipped3: true,
                  isFlipped4: false
                })
              }
              onMouseLeave={() => this.setState({ isFlipped3: false })}
            >
              <div className="cost-vertical-pill cost-vertical-pill-back disruptor">
                <div className="cost-pill-cost">
                  {/* 30 Posts on Instagram / Facebook */}
                  {'30 posts & 30 stories on Instagram & Facebook'}
                  <br />
                  <br />
                  {/* 1 Four-hour Photography / Videography Session */}
                  Graphic Design
                  <br />
                  <br />
                  {/* Surveillance */}
                  2 hours of photography and videography
                  <br />
                  <br />
                  {/* Ad Management or Influencer Marketing */}
                  Ad Management (5 creatives) or Influencer Marketing (2 influencer posts)
                  <br />
                  <br />
                  {/* Analytics */}
                  Surveillance
                  <br />
                  <br />
                  {/* Engagement Strategy */}
                  Analytics
                </div>
              </div>
            </div>
          </ReactCardFlip>

          <ReactCardFlip
            isFlipped={this.state.isFlipped4}
            flipSpeedBackToFront="0.3"
            flipSpeedFrontToBack="0.3"
          >
            <div
              key="front"
              onMouseEnter={() =>
                this.setState({
                  isFlipped1: false,
                  isFlipped2: false,
                  isFlipped3: false,
                  isFlipped4: true
                })
              }
              onMouseLeave={() =>
                this.isFlipped4 ? this.setState({ isFlipped4: false }) : 3
              }
            >
              <div className="cost-vertical-pill dream">
                <div className="cost-pill-knob">dream</div>
                <div className="cost-pill-cost">
                  custom <br /> package
                </div>
              </div>
            </div>
            <div
              key="back"
              onMouseEnter={() =>
                this.setState({
                  isFlipped1: false,
                  isFlipped2: false,
                  isFlipped3: false,
                  isFlipped4: true
                })
              }
              onMouseLeave={() => this.setState({ isFlipped4: false })}
            >
              <div className="cost-vertical-pill cost-vertical-pill-back dream">
                <div className="cost-pill-cost">
                  This package lets you combine a variety of our services based
                  on your brand requirements and budget.
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HowMuchCost);
