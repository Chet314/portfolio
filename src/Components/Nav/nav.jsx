import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import style from './nav.module.css';


const Nav = React.memo(() => {

    return (
        <div className={style.wrapper}>
            <div>
                <h1>Zhenya Kuznetsova</h1>
            </div>
            <NavLink to='/main'>Works</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <div className = {style.icon}>
                <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            </div>
        </div>
    );
});

export default Nav;