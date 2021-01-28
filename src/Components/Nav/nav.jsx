import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faBehance
} from "@fortawesome/free-brands-svg-icons";
import style from './nav.module.css';


const Nav = React.memo(({buttonName, onSubmit, myName, works, about, contacts, profession}) => {

    return (
        <div className={style.wrapper}>
            <div>
                <h1>{myName}</h1>
                <p>{profession}</p>
            </div>
            <NavLink to='/main'>{works}</NavLink>
            <NavLink to='/about'>{about}</NavLink>
            <NavLink to='/contacts'>{contacts}</NavLink>
            <div className = {style.icon}>
                <a href="https://www.instagram.com/crocus_focus/" target = "_blank" rel='noreferrer' ><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
                <a href="https://www.behance.net/crocus_focus" target = "_blank" rel='noreferrer' ><FontAwesomeIcon icon={faBehance} size="1x" /></a>
            </div>
                <button onClick = {onSubmit}>({buttonName})</button>
        </div>
    );
});


export default Nav;