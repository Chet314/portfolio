import React from 'react';
import style from './element.module.css';
import {NavLink} from 'react-router-dom';

const Element = React.memo(({id, element})=>{
    return(
        <div className={style.wrapper}>
            <NavLink to ={"/photo/" + id} ><img src = {element.photo} alt = {element.alt} /></NavLink>
        </div>
    );
});

export default Element;