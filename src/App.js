import './App.css';
import UserForm from './components/UserForm';
import Button from '@mui/material/Button';
import FormUserDetails from './components/FormUserDetails';
import { Component } from 'react';
import FormPersonalDetails from './components/FormPersonalDetails';

function App() {
  return (
    <div className="App">
      <UserForm>
        <FormUserDetails/>
      </UserForm>
    </div>
  );
}

export default App;