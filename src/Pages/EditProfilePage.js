import React from 'react';
import EditUserForm from '../Components/Forms/EditUserForm'
import { Section } from '../Components/Utils/Utils';
import ChorumContext from '../Contexts/ChorumContext';
import { Redirect } from 'react-router-dom';

export default class EditProfilePage extends React.Component {

     static contextType = ChorumContext

     static defaultProps = {
          history: {
               push: () => { },
          },
     }

     handleEditSuccess = user => {
          const { history } = this.props
          history.push('/artist/:id')
     }

     render() {
          if (!this.context.loggedIn)
          return <Redirect to='/' />
          return (
               <Section className='Edit_Form_Container'>
                    <EditUserForm onEditSuccess={this.handleEditSuccess} />
               </Section>
          )
     }
}