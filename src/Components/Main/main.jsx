import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './main.module.css';


const Main = React.memo((props) => {

    let elementPhoto = props.photo.map(element => element.id % 2 === 0 ?
        <div  className={style.right} key = {element.id}>
        <NavLink to = {"/photo/" + element.id} >
            <img src ={element.photos.photo} alt = {element.folder} />
            <h2>{element.folder}</h2>
        </NavLink>
        </div>
        :
        <div  className={style.left} key = {element.id}>
        <NavLink to = {"/photo/" + element.id} >
            <img src ={element.photos.photo} alt = {element.folder} />
            <h2>{element.folder}</h2>
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