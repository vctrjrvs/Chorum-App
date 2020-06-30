import React from 'react';
import SignUpForm from '../Components/Forms/SignUpForm'
import { Section } from '../Components/Utils/Utils';

export default class SignUpPage extends React.Component {

     static defaultProps = {
          history: {
               push: () => { },
          },
     }

     handleSignUpSuccess = user => {
          const { history } = this.props
          history.push('/login')
     }

     render() {
          return (
               <Section className='SignUp_Form_Container'>
                    <SignUpForm onSignUpSuccess={this.handleSignUpSuccess} />
               </Section>
          )
     }
}