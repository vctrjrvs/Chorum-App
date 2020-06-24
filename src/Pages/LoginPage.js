import React from 'react';
import LoginForm from '../Components/Forms/LoginForm/LoginForm'
import { Section } from '../Components/Utils/Utils';

export default class LoginPage extends React.Component {
     static defaultProps = {
          location: {},
          history: {
            push: () => {},
          },
        }

        handleLoginSuccess = () => {
          const { location, history } = this.props
          const destination = (location.state || {}).from || '/'
          history.push(destination)
        }

     render() {
          return (
               <Section className='Login_Form_Container'>
                    <LoginForm 
                    onLoginSuccess={this.handleLoginSuccess}
                    />
               </Section>
          )
     }
}