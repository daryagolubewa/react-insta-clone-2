import React, { Component } from 'react';
import './user-info.css';
import logo from './user-default-image.png';
import settingsLogo from './user-settings.svg';

export default class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      profileInfo: null
    };
  }

  componentDidMount() {
    const getDbData = async () => {
      const res = await fetch('/profile');
      const dbData = await res.json();
      this.setState({ profileInfo: dbData });
    };
    getDbData();
  }

  render() {
    return (
            <div className='user-info__box'>

                <div className='user-info_photo'>
                    <img src={logo} />
                </div>

                <div className='user-info__connections'>
                    <div className='user-info'>
                        <div className='user-info-info'>
                            <div className='user-name'> {profileInfo.nickname} </div>
                            <div className='user-description'> {profileInfo.descripton} </div>
                        </div>
                    <div className='info-settings'>
                        <img src={settingsLogo} className='settings-pic'/>
                    </div>
                    </div>
                    <div className='user-info__statistics'>
                        <div className='user-posts'> 0 posts</div>
                        <div className='user-followers'> 0 followers</div>
                        <div className='user-following'> 0 following </div>
                    </div>
                </div>
            </div>
    );
  }
}
