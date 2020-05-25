import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price*100;
    const publishablekey = 'pk_test_zc9EvBWIcJ950GTMvf64nd5B00UClk4Fua';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label = "Pay Now"
            name = "crwn Clothing Ltd."
            billingAddress
            shippingAddress
            image = "https://sendeyo.com/up/d/f3eb2117da"
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishablekey}
        />
    )
}

export default StripeCheckoutButton;