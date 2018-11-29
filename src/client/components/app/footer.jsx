import React, { Component } from 'react';
import instaImg from './insta.png';
import './app.css';
import '../fonts/fonts.css';



 
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <center>
                        <p>Made for <a href="http://elbrusboot.camp"  target="_blank">ELBRUS / BOOT CAMP</a></p>
                        <p>2018</p>
                    </center>
                </footer>         
            </div>
        );
    }
}