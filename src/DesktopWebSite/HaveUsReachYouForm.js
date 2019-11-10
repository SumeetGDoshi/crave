import React, { Component } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import CustomSnackbar from '../MobileWebsite/Components/CustomSnackbar';

import Services from '../MobileWebsite/Services';

export class HaveUsReachForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      country: '',
      preferred_call_time: "",
      message: "",
      open: false,
      //snackbarMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.message="";
    this.variant = "";
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ showSnakbar: false });
  };
  

  async handleSubmit() {
    if(!this.state.name || !this.state.number || !this.state.country || !this.state.preferred_call_time){
      this.variant = 'error';
      this.message = 'Please enter all fields';
      this.setState({ showSnakbar: true });
      return
  }  
    console.log(this.state);
    try{
      let results = await Services.sendMessage(this.state);
      this.setState({
          name: '',
          number: '',
          country: '',
          preferred_call_time: '',
          message: '',
          open: true,
          showSnakbar: false,
         // snackbarMessage: 'Your message has been sent.'
      });
      this.variant = 'success'
      this.message = "Your message has been sent"
      this.setState({ showSnackbar: true });
    } catch(e){
      console.log(e);
      this.message = "Server Error";
      this.variant = "error"
    }  
    this.setState({ showSnakbar: true })
  }

  render() {
    return (
      <div className="accordion-inner-container">
      <CustomSnackbar vertical="bottom" horizontal='left' variant={ this.variant } message={ this.message } isOpen={ this.state.showSnakbar } handleClose={ this.handleClose.bind(this) }  />
      {/* <Snackbar
        open={this.state.open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        message={<span id="message-id">{this.state.snackbarMessage}</span>}
        autoHideDuration={2500} 
        onClose={this.handleClose.bind(this)}/> */}
        <div className="form-wrapper">
          <form>
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
              <span>Number:</span>
              <input
                type="text"
                name="number"
                className="form-input"
                onChange={e => this.setState({ number: e.target.value })}
                value={this.state.number}
              />
            </div>
            <div className="input-div">
              <span>Preferred call time:</span>
              <input
                type="text"
                name="preferred_call_time"
                className="form-input "
                onChange={e =>
                  this.setState({ preferred_call_time: e.target.value })
                }
                value={this.state.preferred_call_time}
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
            <div className="text-area-container">
              <textarea
                className="text-area"
                placeholder="type your message here...."
                onChange={e => this.setState({ message: e.target.value })}
                value={this.state.message}
              />
            </div>
          </form>
        </div>
        <div onClick={ this.handleSubmit.bind(this) } className="have-us-reach-submit-button">SUBMIT</div>
      </div>
    );
  }

}

export default HaveUsReachForm;
