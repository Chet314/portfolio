import React from 'react';
import style from './photo.module.css';
import {NavLink} from 'react-router-dom';

const Photo = React.memo((props) => {

    let elementPhoto = props.photos.map(element => 
       <div key ={element.id} className = {style.tank}>
              <NavLink to = {"/element/" + element.id} ><img src = {element.photo} alt = {element.alt} /></NavLink> 
        </div>
        );

    return(
        <div className = {style.wrapper}>
           {elementPhoto}
        </div>
    );
}
);

export default Photo;