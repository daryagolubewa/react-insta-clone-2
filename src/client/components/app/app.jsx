import React, { Component } from 'react';
import Type from 'prop-types';
import { bemClassNameFactory } from '../../utils/bem';
import './app.css';
import UserInfo from '../user-info/user-info';


const cn = bemClassNameFactory('app');

export default class App extends Component {
  static propTypes = {
    appName: Type.string
  };

  static defaultProps = {
    appName: 'Default Name'
  };

  state = {
    user: null
  };

  handleSetUser = (user) => {
    this.setState({ user });
  }


  // handleClickButton = () => {
  //   const { buttonActive } = this.state;
  //   console.log(buttonActive);
  //   this.setState({ buttonActive: !buttonActive });
  // };
  //
  // componentDidMount() {
  //   const fetchFunc = async () => {
  //     const res = await fetch('/api/test');
  //     console.log(res);
  //     return res;
  //   };
  //   fetchFunc();
  // }

  render() {
    return (
            <UserInfo />
    );
  }
}
