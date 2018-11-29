import React, { Component } from 'react';
import Type from 'prop-types';
import { Link } from 'react-router-dom';
import elbrusImg from './elbrus.png';
import { PAGES } from '../../routes/pages';
import { bemClassNameFactory } from '../../utils/bem';
import './app.css';
import appRoutes from '../../routes/routes'


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
    this.setState({user})
  } 


  handleClickButton = () => {
    const { buttonActive } = this.state;
    console.log(buttonActive);
    this.setState({ buttonActive: !buttonActive });
  };

  componentDidMount() {
    const fetchFunc = async () => {
      const res = await fetch('/api/test');
      console.log(res);
      return res;
    };
    fetchFunc();
  }

  render() {
    const { appName } = this.props;
    console.log(this.props);
    return (
      <div className={ cn() }>
        { appRoutes(this.state.user, this.handleSetUser) }
      </div>
    );
  }
}
