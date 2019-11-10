import React, { Component } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CustomSnackbar from '../MobileWebsite/Components/CustomSnackbar';

import Popup from '../MobileWebsite/Components/Popup'
import HeaderLogo from "../assets/DesktopWebsite/top_logo.png";
import scrollToComponent from "react-scroll-to-component";
import Services from '../MobileWebsite/Services';
import Icon from '@material-ui/core/Icon';

export class DesktopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollClassOnHeader: false,
      navbarBgColour: "rgba(211, 211, 211, 0)",
      demoRequestFormOpen: false,
      useReferralCodeFormOpen: false,
      showPopup : false,
      code : "",
      name: "",
      email: "",
      number: "",
      code: "",
      country: "",
      comingFrom: "referrals",
      showSnakbar: false      
    };
    this.variant = '';
    this.message = '';

  }


  async onSubmit(){
    if(!this.validateEmail(this.state.email)){
      this.variant = 'error';
      this.message = 'Incorrect email'
      this.setState({showSnakbar: true})
      return;
    }
    if(!this.state.name || !this.state.number || !this.state.country){
      this.variant = 'error';
      this.message = 'Please enter all fields'
      this.setState({showSnakbar: true})
      return;
    }
    
    try{
        let results = await Services.getReferralCode({
            name: this.state.name,
            email: this.state.email,
            number: this.state.number,
            country: this.state.country,
            source: "want to refer us someone",
            isMobile: "No"
        });
        this.code = results.data.code
        this.variant = 'success';
        this.message = 'Referral code has been sent to your email id'
  
        this.setState({
            name: '',
            number: '',
            email:'',
            country: '',
            demoRequestFormOpen: false,
            showPopup : true,
            showSnakbar: true
          });
        
    }catch(e){
      console.log(e);
      this.variant = 'error';
      this.message = 'There was some error. Please try again!';
      this.setState({showSnakbar: true});
    }
    this.setState({
      showPopup : true
    });
    
  }
  validateEmail(email){
    var regex = /\S+@\S+\.\S+/;
    return regex.test(String(email).toLowerCase())
  }
  onClosePopup = () => {
    this.setState({ showPopup: false })
  }
  

  componentDidMount() {
    let self = this;
    window.addEventListener("scroll", function(e) {
      var windowHeight = window.innerHeight;
      var viewHeightsScrolled = window.scrollY / windowHeight;
      if (viewHeightsScrolled > 0.25) {
        self.setState({
          scrollClassOnHeader: true
        });
      } else {
        self.setState({
          scrollClassOnHeader: false
        });
      }
    });
    console.log(this.props.sections);
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    this.setState({ showSnakbar: false });
};


  render() {
    // var referralContent = "";
    // var top_text = "";
    // var button_text = "";
    
    var referSomeOneDrawer = (
      <div 
        className={
          "refereal-drawer refer-someone " +
          (this.state.demoRequestFormOpen ? "opened" : "closed")
        }
      >

        <Popup open={this.state.showPopup}
             popupScreen={true}
             onClose= { this.onClosePopup }>
             {this.code}
         </Popup>      
        <Icon style={{ position: 'absolute', top: '23px', right: "30px", cursor: 'pointer' }} onClick={event => {
                  this.setState({
                    demoRequestFormOpen: !this.state.demoRequestFormOpen,
                    useReferralCodeFormOpen: false
                  });
                }} >close</Icon>
        
        <CustomSnackbar vertical="bottom" horizontal='left'  variant={ this.variant } message={ this.message } isOpen={ this.state.showSnakbar } handleClose={ this.handleClose.bind(this) }  />
                
        
        <div className="refereal-text">
          Drop in your contact details for us to generate a unique code for you.
          <br />
          For each person who signs up using this one-month free discount code, you receive
          $150.
        </div>
        <div>
          <div
            className={
              "refereal-form " +
              (this.state.demoRequestFormOpen ? "" : "hidden")
            }
          >
            <div className="form-wrapper">
              <form onSubmit={this.onSubmit.bind(this)} method="POST">
                <div className="input-div">
                  <span>Name:</span>
                  <input
                    type="text"
                    name="name"
                    className="form-input "
                    onChange={e => this.setState({ name: e.target.value })}
                    value={this.state.name}
                  />
                </div>
                <div className="input-div">
                  <span>E-mail id:</span>
                  <input
                    type="text"
                    name="email"
                    className="form-input "
                    onChange={e => this.setState({ email: e.target.value })}
                    value={this.state.email}
                  />
                </div>
                <div className="input-div">
                  <span>Number:</span>
                  <input
                    type="text"
                    name="number"
                    className="form-input "
                    onChange={e => this.setState({ number: e.target.value })}
                    value={this.state.number}
                  />
                </div>
                <div className="input-div">
                  <span>Country:</span>
                  <input
                    type="text"
                    name="country"
                    className="form-input "
                    onChange={e => this.setState({ country: e.target.value })}
                    value={this.state.country}
                  />
                </div>
              </form>
            </div>
            <div className="refereal-submit-button" onClick={ this.onSubmit.bind(this) }>GENERATE REFERRAL CODE</div>
          </div>
        </div>
      </div>
    );
    var useReferralDrawer = (
      <div
        className={
          "refereal-drawer referral-code " +
          (this.state.useReferralCodeFormOpen ? "opened" : "closed")
        }
      >
        <Icon style={{ position: 'absolute', top: '23px', right: "30px", cursor: 'pointer' }} onClick={event => {
                  this.setState({
                    useReferralCodeFormOpen: !this.state.useReferralCodeFormOpen
                  });
                }} >close</Icon>
        <div>
          <div
            className={
              "refereal-form " +
              (this.state.useReferralCodeFormOpen ? "" : "hidden")
            }
          >
            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="input-div">
                  <span>Name:</span>
                  <input
                    type="text"
                    name="name"
                    className="form-input "
                    onChange={e => this.setState({ name: e.target.value })}
                    value={this.state.name}
                  />
                </div>
                <div className="input-div">
                  <span>E-mail id:</span>
                  <input
                    type="text"
                    name="email"
                    className="form-input "
                    onChange={e => this.setState({ email: e.target.value })}
                    value={this.state.email}
                  />
                </div>
                <div className="input-div">
                  <span>Number:</span>
                  <input
                    type="text"
                    name="number"
                    className="form-input "
                    onChange={e => this.setState({ number: e.target.value })}
                    value={this.state.number}
                  />
                </div>
                <div className="input-div">
                  <span>Country:</span>
                  <input
                    type="text"
                    name="country"
                    className="form-input "
                    onChange={e => this.setState({ country: e.target.value })}
                    value={this.state.country}
                  />
                </div>
                <div className="input-div textarea">
                  <textarea
                    type="text"
                    name="preferred_call_time"
                    className="form-input "
                    placeholder="APPLY REFERRAL CODE"
                    onChange={e =>
                      this.setState({ code: e.target.value })
                    }
                    value={this.state.code}
                  />
                </div>
              </form>
            </div>
            <div className="refereal-submit-button" onClick={ this.handleSubmit.bind(this) }>SUBMIT</div>
          </div>
        </div>
      </div>
    );

    return (
      <div
        className={
          "nav-container " + (this.state.scrollClassOnHeader ? "scrolled" : "")
        }
        style={{}}
      >
        <nav className="sticky">
          <div className="logoHolder">
            <img src={HeaderLogo} />
          </div>
          <div className="navigationLinksContainer">
            <div className="menu-list-container navigationLinkList">
              <div
                className="menu-list navigationLink what-we-do"
                onClick={() => {
                  scrollToComponent(this.props.sections.whatWeDo, {
                    offset: -100,
                    align: "top",
                    duration: 1500
                  });
                }}
              >
                <span className="vertical-align-text">
                  <p>What do</p>
                  <p>we do?</p>
                </span>
              </div>
              <div
                className="menu-list navigationLink how-we-do-it"
                onClick={() => {
                  console.log(this.props.sections.howMuchCost);
                  scrollToComponent(this.props.sections.howWeDoIt, {
                    offset: -100,
                    align: "top",
                    duration: 1500
                  });
                }}
              >
                <span className="vertical-align-text">
                  <p>How do</p>
                  <p>we do it?</p>
                </span>
              </div>
              <div
                className="menu-list navigationLink how-much-would-it-cost"
                onClick={() => {
                  console.log(this.props.sections.howMuchCost);
                  scrollToComponent(this.props.sections.howMuchCost, {
                    offset: -100,
                    align: "top",
                    duration: 1500
                  });
                }}
              >
                <span className="vertical-align-text">
                  <p>What does</p>
                  <p>it cost?</p>
                </span>
              </div>
              <div
                className="menu-list navigationLink who-do-we-work-with"
                onClick={() => {
                  console.log(this.props.sections.howMuchCost);
                  scrollToComponent(this.props.sections.whoWeWorkWith, {
                    offset: -100,
                    align: "top",
                    duration: 1500
                  });
                }}
              >
                <span className="vertical-align-text">
                  <p>Who do we</p>
                  <p>work with?</p>
                </span>
              </div>
              <div
                className="menu-list navigationLink how-can-you-reach-us"
                onClick={() => {
                  console.log(this.props.sections.howMuchCost);
                  scrollToComponent(this.props.sections.howToReach, {
                    offset: -100,
                    align: "top",
                    duration: 1500
                  });
                }}
              >
                <span className="vertical-align-text">
                  <p>How can you</p>
                  <p>reach us?</p>
                </span>
              </div>
              <div
                onClick={event => {
                  this.setState({
                    demoRequestFormOpen: !this.state.demoRequestFormOpen,
                    useReferralCodeFormOpen: false
                  });
                }}
                className="menu-list navigationLink  want-to-refer-someone-to-us"
              >
                <span className="vertical-align-text">
                  <p>Want to refer</p>
                  <p>us to someone?</p>
                </span>
              </div>
              <div
                onClick={event => {
                  this.setState({
                    demoRequestFormOpen: false,
                    useReferralCodeFormOpen: !this.state.useReferralCodeFormOpen
                  });
                }}
                className="menu-list navigationLink do-you-have-a-referral-code"
              >
                <span className="vertical-align-text">
                  <p>Do you have</p>
                  <p>a referral code?</p>
                </span>
              </div>
              <div className="menu-list navigationLink work-with-us" >
              <span className="vertical-align-text">

              <a href="/careers" style={{color: '#444'}}>
                <p>Work with</p>
                <p>us?</p>
              </a>
              </span>
            </div>
            </div>
          </div>
        </nav>
        {referSomeOneDrawer}
        {useReferralDrawer}
      </div>
    );
  }
  async handleSubmit() {
    
    if(!this.validateEmail(this.state.email)){
      this.variant = 'error';
      this.message = 'Incorrect email'
      this.setState({showSnakbar: true})
      return;
    }
    if(!this.state.name || !this.state.number || !this.state.country || !this.state.email || !this.state.code){
      this.variant = 'error';
      this.message = 'Please enter all fields'
      this.setState({showSnakbar: true})
      return;
    }
    
    try{
        let result = await Services.sendRequestDemo({ ...this.state, source: "do you have a refereal code", isMobile: "No"});
        this.variant = 'success';
        this.message = 'Your request has been processed successfully!'
        this.setState({
          showSnakbar: true
        })
    }catch(err){
      console.log(err)
      this.variant = 'error';
      this.message = 'There was some error. Please try again!';
      this.setState({
          showSnakbar: true
        });
    }
    this.setState({
      name: "",
      email: "",
      number: "",
      code: "",
      country: "",
      comingFrom: "referrals",
      useReferralCodeFormOpen: false,
    });
  }
}

export default DesktopHeader;
