import React, { Component } from 'react';
import instaImg from './insta.png';
import './app.css';
import '../fonts/fonts.css';



 
export default class Header extends Component {
    render() {
        return (
            <div>
                <header >
                    <center>
                    <div className="header">
                        <img src={instaImg} id='insta'/>
                    </div>
                    <div className="header">
                        <h1 id='reagram'>Reagram</h1>
                    </div>
                    </center>
                </header>            
            </div>
        );
    }
}