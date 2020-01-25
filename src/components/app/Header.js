import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <div className="logo">
                    <a href="/">Whatsapp<strong>Redirector</strong></a>
                </div>
                <ul className="main-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        );
    }

}