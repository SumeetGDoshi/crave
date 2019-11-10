import React, { Component } from "react";
import Services from '../MobileWebsite/Services';
import WhatWeDoBg from "../assets/DesktopWebsite/top_art_work_bg.png";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CustomSnackbar from '../MobileWebsite/Components/CustomSnackbar';
import { Dialog, DialogContent, DialogTitle, DialogContentText } from "@material-ui/core";

const initialForm = {
  demoRequestFormOpen: false,
  name: "",
  number: "",
  calltime: "",
  email: "",
  code: "",
  country: "",
  comingFrom: "home",
  request_type: "desktop",
  showSnakbar: false,
  showPopup: false

}
    

export class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = initialForm;
    this.submitCall = this.submitCall.bind(this)
    this.variant = '';
    this.message = '';
  }
  componentDidMount() {}

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ showSnakbar: false, showPopup: false });
  };

  validateEmail(email){
    var regex = /\S+@\S+\.\S+/;
    return regex.test(String(email).toLowerCase())
  }

  async submitCall(){
    if(!this.validateEmail(this.state.email)){
      this.variant = 'error';
      this.message = 'Incorrect email'
      this.setState({showSnakbar: true})
      return;
    }
    if(!this.state.name || !this.state.number){
      this.variant = 'error';
      this.message = 'Please enter all fields'
      this.setState({showSnakbar: true})
      return;
    }
    console.log(this.state)
    try{
        Services.contactUsNow({
          name: this.state.name,
          phone: this.state.number,
          referralcode: this.state.code,
          email: this.state.email,
          from: "desktop"
        })
        let result = await Services.sendRequestDemo({...this.state, source: "Contact Us Now", isMobile: "No"});

        this.variant = 'success'
        this.message = "Your message has been sent"
        this.setState({ name: '',
        number: '',
        country: '',
        preferred_call_time: '',
        code: '',
        showSnakbar: true,
        demoRequestFormOpen: false,
        showPopup: true });
        window.fbq("track", "Free Demo Form Submit");
        return;
        // this.props.onrequestSubmit(true) 
    }catch(err){
      console.log(err)
        // this.props.onrequestSubmit(false)
        this.variant = 'error';
        this.message = 'There was some error. Please try again!';
        this.setState({showSnakbar: true, showPopup: false});
    }
    
    // this.setState({
    //   demoRequestFormOpen: false,
    //   name: "",
    //   number: "",
    //   calltime: "",
    //   email: "",
    //   code: "",
    //   country: "",
    //   comingFrom: "home",
    // });
    // console.log(this.state)
  }


  render() {
    return (
      <div className="what-we-do section-container">
      <CustomSnackbar vertical="bottom" horizontal='left' variant={ this.variant } message={ this.message } isOpen={ this.state.showSnakbar } handleClose={ this.handleClose.bind(this) }  />
      
      <Dialog
      open={this.state.showPopup}
      onClose={this.handleClose}
      style={{height: '50vh'}}>
        <DialogTitle>Awesome! <IconButton aria-label="Close" style={{position: 'absolute', right: 20, top: 20}} onClick={ () => this.setState({showPopup: false}) }>                                                                                                                                                                                                           
          <CloseIcon />                                                                                                                                                                                                                                                         
        </IconButton></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank You! The form has been submitted! Please fill in your customer information form 
            <a style={{fontSize: 18, margin: 8}} href="https://docs.google.com/forms/d/e/1FAIpQLSdig5To636PFoB-tITUDf8VxaCnIm5MHSVvlmS73hUexqcDLA/viewform" target='_blank'>here</a> 
          </DialogContentText>
        </DialogContent>
      </Dialog>

        <div className="what-we-do-background">
          <img src={WhatWeDoBg} />
        </div>
        <div className="what-we-do-text">
          We are a social media solution that{" "}
          <span className="strong">you can afford</span> and most importantly{" "}
          <span className="strong">trust.</span>
          <br />
          <p />
          By organising the social media industry we are helping businesses like
          yours find their identity online. We have broken down what it takes to
          create quality content and made it affordable so that every business
          no matter how small can find their place on social media.
          <div
            className={
              "request-free-demo-form-container " +
              (this.state.demoRequestFormOpen ? "opened" : "closed")
            }
          >
            <div
              className="request-free-demo"
              onClick={event => {
                this.setState({
                  demoRequestFormOpen: !this.state.demoRequestFormOpen
                });
              }}
            >
              Contact Us Now
            { this.state.demoRequestFormOpen && <Icon style={{ position: 'relative', top: '8px', left: "40px" }}>close</Icon> }
            </div>
            <div
              className={
                "request-free-demo-form " +
                (this.state.demoRequestFormOpen ? "" : "hidden")
              }
            >
              <div className="form-wrapper">
                <form onSubmit={this.submitCall.bind(this)} method="POST">
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
                      name="number"
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
                  {/* <div className="input-div">
                    <span>Country:</span>
                    <input
                      type="text"
                      name="country"
                      className="form-input "
                      onChange={e => this.setState({ country: e.target.value })}
                      value={this.state.country}
                    />
                  </div> */}
                  {/* <div className="input-div">
                    <span>Preferred call time:</span>
                    <input
                      type="text"
                      name="preferred_call_time"
                      className="form-input "
                      onChange={e =>
                        this.setState({ calltime: e.target.value })
                      }
                      value={this.state.calltime}
                    />
                  </div> */}
                  <div className="input-div textarea">
                    <textarea
                      type="text"
                      name="preferred_call_time"
                      className="form-input "
                      placeholder= "APPLY REFERRAL CODE IF ANY"
                      onChange={e =>
                        this.setState({ code: e.target.value })
                      }
                      value={this.state.refereal_code}
                    />
                  </div>
                </form>
              </div>
              <div className="request-free-demo-submit-button" onClick={ this.submitCall }>SUBMIT</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
