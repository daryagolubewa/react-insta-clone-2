import React, { Component } from 'react';
import {Input, Button, Row, CollapsibleItem, Collapsible} from 'react-materialize'
import Type from 'prop-types';
import { PAGES } from '../../routes/pages';
import './home-page.css'
import { Redirect } from 'react-router';

export default class HomePage extends Component {
  static propTypes = {
    users: Type.array
  };

  static defaultProps = {
    users: [
      {
        nickName: '1',
        password: '1'
      }
    ]
  };

  signUp = () => {
    let newName = document.getElementById('newName').value
    let newPassword = document.getElementById('newPassword').value    
    if (newName !== '' && newPassword !== ''){
      let a = this.props.users.filter((i) => { return i.nickName == newName })
      if(a.length == 0) {
        this.props.users.push({
          nickName: newName,
          password: newPassword
        })
      }
    } else {
      window.Materialize.toast('Fill all fields, please!', 5000)
    }
  }

  signIn = () => {
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    for ( let i = 0; i < this.props.users.length; i++){
      if ((this.props.users[i].nickName === name) && (this.props.users[i].password === password)){
        return this.props.history.push(`/users/${this.props.users[i].nickName}`)
      }
    }
    window.Materialize.toast('Nick Name or password is not correct!', 5000)
  }

  render() {
    return (
      <div className='home-page'>
      <center>
        <div className='form'>
          <Collapsible accordion>
            <CollapsibleItem header='Sign Up' >
              <Input s={6} label="Nick Name" id='newName' />
              <Input s={6} type="password" label="passworp" id='newPassword' />
              <Button waves='light' node='a' onClick={this.signUp}>Sign Up</Button>
            </CollapsibleItem>
            <CollapsibleItem header='Sign In' >
              <Input s={6} label="Nick Name" id="name"/>
              <Input s={6} type="password" label="passworp" id="password"/>
              <Button waves='light' node='a' onClick={this.signIn}>Sign In</Button>
            </CollapsibleItem>
          </Collapsible>
        </div>
      </center>
      </div>
    );
  }
}
