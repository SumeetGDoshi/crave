import React, { Component } from "react";
import $ from "jquery";
import { Redirect } from "react-router-dom";

class Packages extends Component {
  constructor() {
    super();
    this.state = {
      packageName: "",
      packageDescription: "",
      packagegatewayId: "",
      paymentInterval: "",
      packageAmount: "",
      redirect: false,
      subscriptionId: ""
    };
    $.ajax({
      url: "https://crave-backend.herokuapp.com/api/v1/packages",
      method: "GET",
      beforeSend: function(request) {
        request.setRequestHeader(
          "Authorization",
          "Bearer " + window.localStorage.getItem("token")
        );
      },
      dataType: "json",
      success: function(data) {
        let packages = data.result;
        let packageInstance = packages[0];
        this.setState({ packageName: packageInstance.name,
        packageDescription: packageInstance.description,
        packagegatewayId: packageInstance.paymentgatewayId,
        paymentInterval: packageInstance.interval,
    packageAmount: packageInstance.amount + " " + packageInstance.currency});
      }.bind(this),
      error: function(error) {
        alert(error);
      }.bind(this)
    });
  }
  render() {
    return (
      <div
        className="package"
        onClick={event => {
          this.createSubscription(this.state.gatewayPackageId);
        }}
      >
        <h1>{this.state.packageName} <a>Click here to generate subscription</a></h1>
        <div className="package-name">{this.state.packageName}</div>
        <div className="package-description">
          {this.state.packageDescription}
        </div>
        <div className="package-amount">{this.state.packageAmount}</div>
        <hr></hr>
        <div className="package-subscription">{this.state.subscriptionId != '' ?  ("Subscription created with Id: " + this.state.subscriptionId) : ''}
        
        </div>
      </div>
    );
  }

  createSubscription = () => {
    $.ajax({
        url: "https://crave-backend.herokuapp.com/api/v1/subscription",
        method: "POST",
        data: {packageId: this.state.packagegatewayId},
        beforeSend: function(request) {
          request.setRequestHeader(
            "Authorization",
            "Bearer " + window.localStorage.getItem("token")
          );
        },
        dataType: "json",
        success: function(data) {
          let subscriptionId = data.result.paymentgatewayId
          this.setState({subscriptionId: subscriptionId});
          let rzrPayObj = {
            "key": "rzp_test_Nw2i9pz8Qwzqwo",
            "subscription_id": subscriptionId,
            "name": "Crave Social",
            "description": this.state.packageDescription,
            "handler": function (response){
                alert(response.razorpay_payment_id);
            },
            "prefill": {
                "name": "Customer Name",
                "email": "test@email.com"
            },
            "notes": {
                "address": "Hello World"
            },
            "theme": {
                "color": "#F37254"
            }
        }
        var rzp1 = new window.Razorpay(rzrPayObj);
        rzp1.open();
        }.bind(this),
        error: function(error) {
          alert(error);
        }.bind(this)
      });
  }
  
}
export default Packages;
