import React, { Component } from "react";
import $ from 'jquery';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      businessName: "",
      email: "",
      redirect : false
    };
  }
  render() {
      const {redirect } = this.state;
      if (redirect) {
          return <Redirect to='/login'/>
      }
      else {
    return (
      <div className="login-form form-div">
        <div className="input-div">
          <span>Username</span>
          <input
            name="username"
            onChange={e => this.setState({ username: e.target.value })}
          />
        </div>
        <div className="input-div">
          <span>Password</span>
          <input
            name="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="input-div">
          <span>Business Name</span>
          <input
            name="businessName"
            onChange={e => this.setState({ businessName: e.target.value })}
          />
        </div>
        <div className="input-div">
          <span> Email</span>
          <input
            name="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <button onClick={()=> {this.submitLoginForm()}}>Submit</button>
      </div>
    );}
  }
  submitLoginForm = () => {
    let submitObject = {
        name: this.state.username,
        password: this.state.password,
        businessName: this.state.businessName,
        email: this.state.email
    }
    $.ajax({
        url: 'https://crave-backend.herokuapp.com/api/v1/users',
        data: submitObject,
        method: 'POST',
        dataType: 'json',
        success: function(data) {
            alert(data.result.username + ", You have been signed up, you are redirected to login page");
            this.setState({redirect: true});

        }.bind(this),
        error: function(error) {
            alert(error)
        }.bind(this)

    })
  }
}
export default SignUp;


