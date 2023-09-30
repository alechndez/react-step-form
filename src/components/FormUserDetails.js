import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class FormUserDetails extends Component {
  continue = e => {
      e.preventDefault()
      this.props.nextStep()

  }
  render() {
      const {values, handleChange} = this.props
    return (
          <React.Fragment>
              <AppBar>Enter User Details</AppBar> 
              <br/><br/>
              <TextField
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
              <br/><br/>
              <TextField
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
              <br/><br/>
              <TextField
                label="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
              />
              <br/><br/>
              <Button primary={true} variant="contained" onClick={this.continue}>Contiue</Button>
          </React.Fragment>
    )
  }
}
const styles = {
  button:{
    margin: 15
  }
}

export default FormUserDetails