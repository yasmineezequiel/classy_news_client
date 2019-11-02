import React, { Component } from 'react'
import axios from 'axios'
import { 
        CardNumberElement,
        CardExpiryElement,
        CardCvcElement,
        injectStripe 
      } from 'react-stripe-elements'
import { Form, Container, Button, Card } from 'semantic-ui-react'

class CheckoutForm extends Component {
  state = {
    renderCheckoutForm: true,
    message: ''
  }

  submitPayment = async (ev) => {
    ev.preventDefault()
    await this.props.stripe.createToken().then(({ token }) => {
      token
        ? this.stripePayment(token.id)
        : this.state.message
    })
  }

  stripePayment = async (stripeToken) => {
    try {
      let respose = await axios.post('/subscriptions', {
        stripeToken
      })
      if (response.status === 200) {
        this.setState({ message: response.data.message })
        this.setState({ renderCheckoutForm: false })
      }
    } catch (error) {
      this.setState({
        message: response.data.errors
      }) 
    }
  }

  render() {
    let stripeForm

    if (this.state.message) {
      message = <p>{ this.state.message }</p>
    }

    if (this.state.renderCheckoutForm) {
      stripeForm = (
        <Form id="payment-form">
          <Form.Field>
            <label>Please choose your subscription plan:</label>
            <Form.Field>
              <Card>
                <Card.Content header="Yearly" />
                <Card.Content description="5000 SEK" />
              </Card>
            </Form.Field>
          </Form.Field>
          <Form.Field>
            <label>Credit Card Number:</label>
            <Form.Field>
              <CardNumberElement />
            </Form.Field>
          </Form.Field>
          <Form.Field>
            <label>Expire Date:</label>
            <Form.Field>
              <CardExpiryElement />
            </Form.Field>
          </Form.Field>
          <Form.Field>
            <label>CVC Number:</label>
            <Form.Field>
              <CardCvcElement />
            </Form.Field>
          </Form.Field>
          <Form.Field>
            <Button onClick={this.submitPayment} id="submit-payment-button">
              Proceed with Payment
            </Button>
          </Form.Field>
        </Form>
      )
    }
    return (
      <Container>
        {StripeForm}
        {message}
      </Container>
    )
  }
}

export default injectStripe((CheckoutForm))
