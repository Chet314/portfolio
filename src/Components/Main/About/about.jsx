import React from 'react';
import style from './about.module.css';


const About = ({aboutMe}) => {
    return (
        <div className = {style.wrapper}>
            <p>{aboutMe}</p>
            <img src={process.env.PUBLIC_URL + "/images/2.webp"} alt = "myPhpoto" />
        </div>
    );
};

export default About;

