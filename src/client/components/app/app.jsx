import React, { Component } from 'react';
import Type from 'prop-types';
import { Link } from 'react-router-dom';
import elbrusImg from './elbrus.png';
import { PAGES } from '../../routes/pages';
import { bemClassNameFactory } from '../../utils/bem';
import './app.css';
import appRoutes from '../../routes/routes'
import AddPost from './add' 


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
      {/* <AddPost  {...this.state, this.handleSetUser}/> */}
        <div>
          <Link to={PAGES.login.path}>Log in</Link>
          {/* <Link to={}></Link> */}
        </div>
        { appRoutes(this.state.filter, this.handleSetFilter) } 
      </div>
    );
  }
}
