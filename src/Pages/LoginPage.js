import React from 'react';
import LoginForm from '../Components/Forms/LoginForm'
import { Section } from '../Components/Utils/Utils';
import ChorumContext from '../Contexts/ChorumContext';

export default class LoginPage extends React.Component {
     static defaultProps = {
          location: {},
          history: {
            push: () => {},
          },
        }
     
        static contextType = ChorumContext

        handleLoginSuccess = () => {
          const { location, history } = this.props
          const destination = (location.state || {}).from || '/'
          this.context.setLoginStatus(true)
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