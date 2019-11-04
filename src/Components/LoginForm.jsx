import React from 'react'
import { Form,
         Button 
} from "semantic-ui-react";
import { useTranslation } from 'react-i18next'

const LoginForm = (props) => {
  return (
    <div>
      <Form id='login-form'>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder={t('loginform.email')} name='email' id="email-input" />
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder={t('loginform.password')} name='password' id="password-input" />
          </Form.Field>
          <Button onClick={props.handleLogin} id="submit-login-form" type='submit'>{t('loginform.submit')}</Button>
          <Button onClick={props.renderLogin} id="cancel-login-form">{t('loginform.cancel')}</Button>
        </Form>
    </div>
  )
}

export default LoginForm