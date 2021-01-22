import React from 'react';
import style from './about.module.css';


const About = () => {
    return (
        <div className = {style.wrapper}>
            <p>
                Zhenya Kuznetsova is an artist, photographer and creative interlocutor, born in Russia,
                and based in New York. Alyona breathes new life into fashion with her personal narratives and truths.
                Her portraits, still-lifes and editorial work (in both menswear and womenswear) apply the principles of pure photography,
                using simply light and shade.Made with love, inspired by nature.
            </p>
            <img src={process.env.PUBLIC_URL + "/images/2.webp"} alt = "myPhpoto" />
        </div>
    );
};

export default About;

