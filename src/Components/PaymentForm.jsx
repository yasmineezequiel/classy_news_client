import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from '../Components/CheckoutForm'
import { Container } from 'semantic-ui-react'

class PaymentForm extends Component {
  render() {
 
    // let stripeApiKey = process.env.REACT_APP_STRIPE_API_KEY

    return (
      <Container>
        <StripeProvider apiKey="pk_test_Z5FeQqat78fR3y3S41JrTSTh00LLyGEvNZ">
          <div>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
      </Container>
    )
  }
}

export default PaymentForm