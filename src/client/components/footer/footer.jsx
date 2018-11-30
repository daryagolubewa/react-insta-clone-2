import React, { Component } from 'react';
import './footer.css';
import '../fonts/fonts.css';
import {Footer} from 'react-materialize'



 
export default class isFooter extends Component {
    render() {
        return (
            <div>
                <footer>
                    <center>
                        <p>Made for <a href="http://elbrusboot.camp"  target="_blank">ELBRUS / BOOT CAMP</a></p>
                        <p>{new Date().getFullYear()}</p>
                    </center>
                </footer>         
            </div>
        );
    }
}