import React, { Component } from 'react';
import {Button, Input, Icon} from 'react-materialize'
import './login.css'


export default class InfoPage extends Component {
  render() {
    return (
      <div className='login-page'>
      <h1>{this.props.user}</h1>
          <Input s={6} label="Name" validate><Icon>account_circle</Icon></Input>       
          <Button waves='light' className="blue" onClick={ () => { this.props.setUser("qwe") } }>OK</Button>
      </div>  
    );
  } 
}
