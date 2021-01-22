import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './main.module.css';



const Main = React.memo((props) => {

    let elementPhoto = props.photo.map(element => 
        <div  className={style.tank} key = {element.id}>
        <NavLink to = {"/photo/" + element.id} >
            <img src ={element.photos.photo} alt = {element.folder} />
            <p>{element.folder}</p>
        </NavLink>
        </div>
        );

    return(
        <div className={style.wrapper}>
            {elementPhoto}
        </div>
    );
});

export default Main;