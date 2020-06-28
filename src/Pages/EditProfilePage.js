import React from 'react';
import EditUserForm from '../Components/Forms/EditUserForm/EditUserForm'
import { Section } from '../Components/Utils/Utils';
import ChorumContext from '../Contexts/ChorumContext';

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
          return (
               <Section className='Edit_Form_Container'>
                    <EditUserForm onEditSuccess={this.handleEditSuccess} />
               </Section>
          )
     }
}