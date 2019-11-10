import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './Components/CheckoutForm';

class StripePayment extends Component{
    render(){
        return (
            <StripeProvider apiKey="pk_test_P8hIpijdnA3TyQxNuAdI2ioV">
                <div className="paymentpage">
                    <h1>
                        React Stripe Payment
                    </h1>
                    <Elements>
                        <CheckoutForm />
                    </Elements>
                </div>
            </StripeProvider>
        )
    }
}

export default StripePayment;