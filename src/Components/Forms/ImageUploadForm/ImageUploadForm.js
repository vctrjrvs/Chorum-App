import React from 'react';
import { Button, Input } from '../../Utils/Utils'

export default class ImageUploadForm extends React.Component {

     static defaultProps = {
          onUploadSuccess: () => { }
     }

     state = { error: null }

     render() {
          const { error } = this.state
          return (
               <form className='Image_Upload_Form' onSubmit={this.handleSubmitUpload}>
                    <div role='alert'> {error && <p className='Red_Alert'> {error.message} </p>} </div>

                    <fieldset>

                         <legend>Log In</legend>

                         <label htmlFor='Image_Upload_Form_Input'> Profile Picture </label>

                         <Input type='file' placeholder='Browse' name='image' id='Image_Upload_Form' accept="image/*" required />

                         <Button type='submit'> Upload </Button>
                    </fieldset>
               </form>
          )
     }
}