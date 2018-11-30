import React, { Component } from 'react';
import {Input, Button, CollapsibleItem, Collapsible} from 'react-materialize'
import Type from 'prop-types';
import './home-page.css'

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

  signUp = async () => {
    let newName = document.getElementById('newName').value
    let newPassword = document.getElementById('newPassword').value 
    alert(newName)
    let res = await fetch('/api/addUser', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.props.users[0])
    })
    console.log(res)
    if (newName === '' && newPassword === ''){
      window.Materialize.toast('Fill all fields, please!', 5000)      
    } else {
      window.Materialize.toast('You are signed up!', 5000)
    } 
  }

  signIn = () => {
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    let res = await fetch('/api/users', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.props.users[0])
    })
    console.log(res)
    if (name === '' && password === ''){
        window.Materialize.toast('Fill all fields, please!', 5000)
    } else {
      if(res.status === 400) {
        window.Materialize.toast('Nick Name or password is not correct!', 5000)
      } else {
        window.Materialize.toast('You are signed up!', 5000)
        return this.props.history.push(`/users/${this.props.users[i].nickName}`)
      }
    }
  }

  render() {
    return (
      <div className='home-page'>
      <center>
        <div className='form'>
          <Collapsible accordion>
            <CollapsibleItem header='Sign Up' >
              <Input s={6} label="Nick Name" id='newName' />
              <Input s={6} type="password" label="password" id='newPassword' />
              <Button waves='light' node='a' onClick={this.signUp} className="button">Sign Up</Button>
            </CollapsibleItem>
            <CollapsibleItem header='Sign In' >
              <Input s={6} label="Nick Name" id="name"/>
              <Input s={6} type="password" label="passworp" id="password"/>
              <Button waves='light' node='a' onClick={this.signIn} className="button">Sign In</Button>
            </CollapsibleItem>
          </Collapsible>
        </div>
      </center>
      </div>
    );
  }
}
