import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import $ from 'jquery';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/packages" />;
    } else {
      return (
        <div className="form-div">
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
              name="username"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button onClick={()=> {this.submitLoginForm()}}>Submit</button>
        </div>
      );
    }
  }
  submitLoginForm = () => {
    let submitObject = {
        name: this.state.username,
        password: this.state.password,
    }
    $.ajax({
        url: 'https://crave-backend.herokuapp.com/api/v1/login',
        data: submitObject,
        method: 'POST',
        dataType: 'json',
        success: function(data) {
            alert(data.result.username + ", You have logged in , youll be redirected to home page");
            window.localStorage.setItem('token', data.token);
            this.setState({redirect: true});

        }.bind(this),
        error: function(error) {
            alert(error)
        }.bind(this)

    })
  }
}

export default LoginPage;
