import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
      e.preventDefault()
      this.props.nextStep()
  }
  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
      const {values, handleChange} = this.props
    return (
          <React.Fragment>
              <AppBar>Enter Personal Details</AppBar> 
              <br/><br/>
              <TextField
                label="Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
              />
              <br/><br/>
              <TextField
                label="City"
                onChange={handleChange('city')}
                defaultValue={values.city}
              />
              <br/><br/>
              <TextField
                label="Bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
              />
              <br/><br/>
              <Button primary={true} variant="contained" onClick={this.continue}>Contiue</Button>
              <br/><br/>
              <Button primary={false} variant="outlined" onClick={this.back}>Back</Button>
          </React.Fragment>
    )
  }
}

export default FormPersonalDetails