import React, { Component } from 'react';
import Type from 'prop-types';
import UserInfo from '../user-info/user-info';
import { Link } from 'react-router-dom';
import { PAGES } from '../../routes/pages';
import { bemClassNameFactory } from '../../utils/bem';
import './app.css';
import '../fonts/fonts.css';
import appRoutes from '../../routes/routes'
import AddPost from './add' 
import Header from '../header/header'
import Footer from '../footer/footer'


const cn = bemClassNameFactory('app');

export default class App extends Component {
  static propTypes = {
    appName: Type.string
  };

  static defaultProps = {
    appName: 'Default Name'
  };

  state = {
    filter:{sourse: ''}
  };

  handleSetFilter = async (name) => {
    await this.setState({filter:{sourse: name}})
  } 


  render() {
    return (
      <div className={ cn() }>
        <Header/>
        { appRoutes(this.state.filter, this.handleSetFilter) } 
        <Footer/>
      </div>
    );
  }
}
