import React, {Component} from 'react';
import AtBubblesLogo from '../../assets/DesktopWebsite/AT_Bubbles_Logo.png';
import RazorpayLogo from '../../assets/DesktopWebsite/Razorpay_logo.png';
import StripeLogo from '../../assets/DesktopWebsite/Stripe_Logo.png';
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';



const handleBlur = () => {
    console.log('[blur]');
  };
  const handleChange = (change) => {
    console.log('[change]', change);
  };
  const handleClick = () => {
    console.log('[click]');
  };
  const handleFocus = () => {
    console.log('[focus]');
  };
  const handleReady = () => {
    console.log('[ready]');
  };
  
  

// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    }
  }
};
class _SplitForm extends React.Component {
    handleSubmit = (ev) => {
      ev.preventDefault();
      if (this.props.stripe) {
        this.props.stripe
          .createToken()
          .then((payload) => console.log('[token]', payload));
      } else {
        console.log("Stripe.js hasn't loaded yet.");
      }
    };
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Card number
            <CardNumberElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <label>
            Expiration date
            <CardExpiryElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <label>
            CVC
            <CardCVCElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <label>
            Postal code
            
          </label>
          <button>Pay</button>
        </form>
      );
    }
  }
  const SplitForm = injectStripe(_SplitForm);
  

class MobilePayment1 extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_RXwtgk4Z5VR82S94vtwmam6P8qMXQ">
        <Elements>
          <SplitForm handleResult={this.props.handleResult} />
        </Elements>
      </StripeProvider>
    );
  }
}

export default MobilePayment1;