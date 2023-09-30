import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';

export class Success extends Component {
  render() {
    return (
        <React.Fragment>
              <AppBar>Success</AppBar> 
              <h1>Thank You For Your Submission</h1>
              <p>You will get an email with further instructions</p>
        </React.Fragment>
    )
  }
}

export default Success