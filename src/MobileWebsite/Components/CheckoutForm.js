import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import './Components.css'
import Services from '../Services';

var style = {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
};
  


class CheckoutForm extends Component {
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    } 

    async submit(){
        try{
            let { token, error } = await this.props.stripe.createToken({name: "Aniketbhange"});
            console.log(token, error)
            let result = await Services.chargePayment(token);
            console.log(result)
        }catch(e){
            console.log(e)
        }
        
    }

    render(){
        return (
            <div style={style}>
                <p> Would you like to complete your purches! </p>
                <CardElement />
                <button onClick={this.submit}>Send</button>
            </div>
        )
    }
}

export default injectStripe(CheckoutForm);
