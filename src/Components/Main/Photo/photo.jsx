import React from 'react';
import style from './photo.module.css';

const Photo = React.memo((props) => {

    let elementPhoto = props.photos[0].map(element => 
        <div key ={element.alt} className = {style.tank}>
               <img src = {element.photo} alt = {element.alt} />
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