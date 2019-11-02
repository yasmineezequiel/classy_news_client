import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from '../Components/CheckoutForm'
import { Container } from 'semantic-ui-react'

class PaymentForm extends Component {
  render() {
    return (
      <Container>
        <StripeProvider apiKey="pk_test_Go2keK39yfQ3pxYR2bpuewJ500aaZJcb0p">
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