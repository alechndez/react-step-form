import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  };

export class Confirm extends Component {
  continue = e => {
      e.preventDefault()
      //PROCESS FORM (SEND DATA TO BACKEND)
      this.props.nextStep()
    }
    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
  render() {
      const {values: {firstName,lastName,email,occupation,city,bio}} = this.props
    return (
        <div style={containerStyle}>
              <AppBar>Confirm</AppBar> 
              <List>
                  <ListItem>
                    <ListItemText primary="First Name" secondary={firstName} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Last Name" secondary={lastName} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Email" secondary={email} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Occupation" secondary={occupation} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="City" secondary={city} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Bio" secondary={bio} />
                  </ListItem>
              </List>
              <Button primary={true} variant="contained" onClick={this.continue}>Confirm & Contiue</Button>
              <br/>
              <Button primary={false} variant="outlined" onClick={this.back}>Back</Button>
          </div>
    )
  }
}

export default Confirm