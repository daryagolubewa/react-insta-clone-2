import React, { Component } from 'react';
import './user-info.css';
import logo from './user-default-image.png';


export default class UserInfo extends Component {
  render() {
    return (
            <div className='user-info__box'>
                <div className='user-info_photo'>
                    <img src={logo} />
                </div>
                <div className='user-info__connections'>
                    <div className='user-name'> Batman Batmanovich</div>
                    <div className='user-info__info'>
                        I am Batman!</div>
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
